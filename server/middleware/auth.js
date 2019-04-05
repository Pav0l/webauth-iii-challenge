const jwt = require('jsonwebtoken');

function isUserAuth(req, res, next) {
  // check header for authorization with a JWT
  const token = req.headers.authorization;

  if (token) {
    // this takes token, secret and a CB
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: 'Not authorized' })
      } else {
        // put the token to the endpoint to the req object, 
        // so it can move to another middlewares as AUTHORIZED
        req.decodedToken = decodedToken;
        // move the request along
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
}

module.exports = isUserAuth;
