const { Router } = require('express');

const postsRoute = Router();
const postsController = require('../controller/posts.controller');

const { 
    validate,
    validateCategoryId,
    validateUpdate,
    validateUser,
     } = require('../middlewares/validatePost.middleware');

const verifyToken = require('../middlewares/validateToken.middleware');

postsRoute.post('/',
 verifyToken, 
 validate,
 validateCategoryId,
 postsController.postCreator);

 postsRoute.get('/', verifyToken, postsController.getPosts);
 postsRoute.get('/:id', verifyToken, postsController.getpPostsById);

 postsRoute.put('/:id',
 verifyToken,
 validateUser,
 validateUpdate, 
  postsController.updatePost);
  postsRoute.delete('/:id', verifyToken, validateUser, postsController.deletePost);

module.exports = { postsRoute, postsController };