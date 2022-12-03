const { Router } = require('express');
const { verifyToken } = require('../middlewares/validateToken.middleware');

const categoryRoutes = Router();

const categoriesController = require('../controller/categories.controller');
const { validateCaterory } = require('../middlewares/category.middleware');

categoryRoutes.post('/', verifyToken, validateCaterory, categoriesController.createCategory);
categoryRoutes.get('/', verifyToken, categoriesController.getCategories);

module.exports = { categoryRoutes, categoriesController };