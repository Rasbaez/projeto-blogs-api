const { Router } = require('express');

const loginRoute = Router();
const loginController = require('../controller/login.controller');
const { isAdmin } = require('../middlewares/validateAdmin.middleware');

loginRoute.post('/', isAdmin, loginController.loginUser);

module.exports = { loginRoute };