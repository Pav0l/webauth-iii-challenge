require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DB = require('../data/dbQueries');

const routes = express.Router();


/*
https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
jwt.sign(payload, secretOrPrivateKey, [options, callback])
Returns the JsonWebToken as string
*/
const createToken = user => {
tokenPayload = {
  subject: user.user_id,
};
return jwt.sign(tokenPayload, process.env.JWT_SECRET);
};

/*
LOGIN USER
@dev - [POST] - req.body must contain valid username and password
@dev - returns message/error string
@TODO - return auth token
*/
routes.post('/', async(req, res, next) => {
  let { username, password } = req.body;
  
  try {
    const savedUser = await DB.getUserByName(username);

    if (savedUser) {
      const hashedPw = savedUser.password;
      const areTheseProperCredentials = bcrypt.compareSync(password, hashedPw);
      
      if (areTheseProperCredentials) {
        const token = createToken(savedUser);
        res.status(200).json({ message: 'User logged in succesfully.', token });    
      } else {
        res.status(401).json({ error: 'Incorrect password'});
      }

    } else {
      res.status(401).json({ error: `User ${username} does not exist.`});
    }
  } catch (error) {
    next(error);
  }  
});


module.exports = routes;
