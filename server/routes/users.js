const express = require('express');
const isUserAuth = require('../middleware/auth');
const DB = require('../data/dbQueries');

const routes = express.Router();

/*
GET ALL USERS
@dev - [GET] - req.header must contain authorization header with proper JWT
@dev - returns an array of all users
*/
routes.get('/', isUserAuth, async (req, res, next) => {
  try {
    // get users department from the token
    const usersDepartment = req.decodedToken.department;
    // get users with from the same department
    const getDepartmentColleagues = await DB.getUsersInDepartment(usersDepartment);
    res.status(200).json(getDepartmentColleagues);
  } catch (error) {
    next(error);
  }
});


module.exports = routes;
