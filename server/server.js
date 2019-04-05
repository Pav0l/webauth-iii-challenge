require('dotenv').config();
// Import dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// Import middlewares
const serverError = require('./middleware/error');
const reqLogger = require('./middleware/logger');
// Import routes
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const usersRoutes = require('./routes/users');

// Define variables
const app = express();
const registerUrl = '/api/register';
const loginUrl = '/api/login';
const usersUrl = '/api/users';

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(reqLogger);

app.use(registerUrl, registerRoutes);
app.use(loginUrl, loginRoutes);
app.use(usersUrl, usersRoutes);

app.get('/', (req, res) => {
  res.status(200).json('Welcome to the home page');
});

app.use(serverError);

module.exports = app;
