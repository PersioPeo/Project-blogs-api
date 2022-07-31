const express = require('express');

const rescue = require('express-rescue');

const { criarController } = require('../controllers/categoryController');

const { authMiddleware } = require('../middleware');

const categoryRouter = express.Router();

categoryRouter.post('/categories', authMiddleware, rescue(criarController));

module.exports = { categoryRouter };
