const express = require('express');
const isUserAuth = require('../middleware/auth');
const DB = require('../data/dbQueries');

const routes = express.Router();

// @TODO - edit the endpoint with JWT token

/*
GET ALL USERS
@dev - [GET] - req.header must contain authorization header with proper JWT
@dev - returns an array of all users
*/
routes.get('/', isUserAuth, async (req, res, next) => {
  try {
    const getEveryUser = await DB.getAllUsers();
    res.status(200).json(getEveryUser);
  } catch (error) {
    next(error);
  }
});


module.exports = routes;
