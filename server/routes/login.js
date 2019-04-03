const express = require('express');
const bcrypt = require('bcrypt');
const DB = require('../data/dbQueries');

const routes = express.Router();

// @TODO - edit the endpoint with JWT token

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
        res.status(200).json({ message: 'User logged in succesfully.' });    
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
