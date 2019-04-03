const express = require('express');
const DB = require('../data/dbQueries');

const routes = express.Router();

// @TODO - edit the endpoint with JWT token

/*
GET ALL USERS
@dev - [GET] - req.header must contain cookie with proper session info
@dev - returns an array of all users
*/
routes.get('/', async (req, res, next) => {
  try {
    const getEveryUser = await DB.getAllUsers();
    res.status(200).json(getEveryUser);
  } catch (error) {
    next(error);
  }
});


module.exports = routes;
