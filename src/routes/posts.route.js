const { Router } = require('express');

const postsRoute = Router();
const postsController = require('../controller/posts.controller');
const { validate, validateCategoryId } = require('../middlewares/validatePost.middleware');
const verifyToken = require('../middlewares/validateToken.middleware');

postsRoute.post('/',
 verifyToken, 
 validate,
 validateCategoryId,
 postsController.postCreator);

module.exports = { postsRoute, postsController };