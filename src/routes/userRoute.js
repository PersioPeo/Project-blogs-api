const express = require('express');

const rescue = require('express-rescue');
  
const {
    criarController,
    listarController,
    pegarPorIdController,
    removerController,
} = require('../controllers/userController');

const { authMiddleware } = require('../middleware');

const userRouter = express.Router();

userRouter.post('/user', rescue(criarController));
userRouter.get('/user', authMiddleware, rescue(listarController));
userRouter.get('/user/:id', authMiddleware, rescue(pegarPorIdController));
userRouter.delete('/user/:me', authMiddleware, rescue(removerController));

module.exports = {
    userRouter,
};