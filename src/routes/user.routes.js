const { Router } = require('express');

const userRoutes = Router();
const userController = require('../controller/user.controller');
const { newUserVerify } = require('../middlewares/newUser.middleware');
const { verifyToken } = require('../middlewares/validateToken');

userRoutes.post('/', newUserVerify, verifyToken, userController.createUser);

module.exports = { userRoutes };