const express = require('express');

const rescue = require('express-rescue');

const { loginController } = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/login', rescue(loginController));

module.exports = { loginRouter };
