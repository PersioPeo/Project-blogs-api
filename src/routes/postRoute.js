const express = require('express');

const rescue = require('express-rescue');

const { authMiddleware } = require('../middleware');

const { criarController } = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/post', authMiddleware, rescue(criarController));

module.exports = { postRouter };