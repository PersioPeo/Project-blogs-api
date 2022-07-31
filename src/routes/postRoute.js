const express = require('express');

const rescue = require('express-rescue');

const { authMiddleware } = require('../middleware');

const {
    criarController,
    listarController,
    pegarPorIdController,
    atualizarController,
} = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/post', authMiddleware, rescue(criarController));
postRouter.get('/post', authMiddleware, rescue(listarController));
postRouter.get('/post/:id', authMiddleware, rescue(pegarPorIdController));
postRouter.put('/post/:id', authMiddleware, rescue(atualizarController));

module.exports = { postRouter };