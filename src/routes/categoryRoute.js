const express = require('express');

const rescue = require('express-rescue');

const { criarController, listarController } = require('../controllers/categoryController');

const { authMiddleware } = require('../middleware');

const categoryRouter = express.Router();

categoryRouter.post('/categories', authMiddleware, rescue(criarController));
categoryRouter.get('/categories', authMiddleware, rescue(listarController));

module.exports = { categoryRouter };
