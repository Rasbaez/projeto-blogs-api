const { Router } = require('express');

const userRoutes = Router();
const userController = require('../controller/user.controller');
const { newUserVerify } = require('../middlewares/newUser.middleware');

userRoutes.post('/', newUserVerify, userController.createUser);

module.exports = { userRoutes };