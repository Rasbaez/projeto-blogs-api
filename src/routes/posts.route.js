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

 postsRoute.get('/', verifyToken, postsController.getPosts);
 postsRoute.get('/:id', verifyToken, postsController.getpPostsById);

module.exports = { postsRoute, postsController };