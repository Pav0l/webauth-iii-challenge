const knex = require('knex');
const knewxConfig = require('../knexfile');

const db = knex(knewxConfig.development);

module.exports = {
  insertUser,
  getUserByName,
  getAllUsers,
  getUsersInDepartment,
};

function insertUser(username, email, password) {
  return db('users').insert({ username, email, password });
}

function getUserByName(username) {
  return db('users').where({ username }).first();
}

function getAllUsers() {
  return db('users');
}

function getUsersInDepartment(department) {
  return db('users').where({ department });
}
