const express = require('express');
const bcrypt = require('bcrypt');
const DB = require('../data/dbQueries');

const routes = express.Router();

/*
SIGNUP USER
@dev - [POST] - req.body must contain valid username, email and password
@dev - return - array with ID of the user
*/
routes.post('/', async(req, res, next) => {
  let { username, department, password } = req.body;
  
  if (username || department || password) {
    try {
      const hash = bcrypt.hashSync(password, 10);  
      password = hash;
      const addNewUser = await DB.insertUser(username, department, password);
      res.status(201).json(addNewUser);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json({ message: 'Please enter username, department and password.'});
  }
});


module.exports = routes;
