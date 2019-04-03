require('dotenv').config();
// Import dependencies
const express = require('express');
const helmet = require('helmet');
// Import middlewares
const serverError = require('./middleware/error');
// Import routes
// const signupRoutes = require('./signup');
// const loginRoutes = require('./login');

// Define variables
const app = express();
const signupUrl = '/api/signup';
const loginUrl = '/api/login';

app.use(express.json());
app.use(helmet());


// app.use(signupUrl, signupRoutes);
// app.use(loginUrl, loginRoutes);


app.get('/api/users', (req, res) => {
  res.status(200).json('Main home');
});


app.use(serverError);

module.exports = app;
