const express = require('express');

const rescue = require('express-rescue');

const { authMiddleware } = require('../middleware');

const {
    criarController,
    listarController,
    pegarPorIdController,
    atualizarController,
    removerController,
    atualizarSearchController,
} = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/post', authMiddleware, rescue(criarController));
postRouter.get('/post', authMiddleware, rescue(listarController));
postRouter.get('/post/search', authMiddleware, rescue(atualizarSearchController));
postRouter.get('/post/:id', authMiddleware, rescue(pegarPorIdController));
postRouter.put('/post/:id', authMiddleware, rescue(atualizarController));
postRouter.delete('/post/:id', authMiddleware, rescue(removerController));

module.exports = { postRouter };