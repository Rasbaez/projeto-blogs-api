const { Router } = require('express');

const userRoutes = Router();
const userController = require('../controller/user.controller');
const { newUserVerify } = require('../middlewares/newUser.middleware');
const verifyToken = require('../middlewares/validateToken.middleware');

userRoutes.post('/', newUserVerify, userController.createUser);
userRoutes.get('/', verifyToken, userController.getUsers);
userRoutes.get('/:id', verifyToken, userController.getUserById);
userRoutes.delete('/:me', verifyToken, userController.deleteMe);

module.exports = { userRoutes };