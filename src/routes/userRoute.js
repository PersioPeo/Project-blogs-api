const express = require('express');

const rescue = require('express-rescue');
  
const { criarController, listarController } = require('../controllers/userController');

const { authMiddleware } = require('../middleware');

const userRouter = express.Router();

userRouter.post('/user', rescue(criarController));
userRouter.get('/user', authMiddleware, rescue(listarController));

module.exports = {
    userRouter,
};