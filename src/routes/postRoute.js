const express = require('express');

const rescue = require('express-rescue');

const { authMiddleware } = require('../middleware');

const { criarController, listarController } = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/post', authMiddleware, rescue(criarController));
postRouter.get('/post', authMiddleware, rescue(listarController));

module.exports = { postRouter };