const { generateToken } = require('../auth/token');
const userService = require('../service/user.service');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const { body } = req;

  const { token } = generateToken(body);

  const user = await userService.getUserByEmail(body.email);
 const { message, type } = await userService.createUser(body);

 if (user) return res.status(409).json({ message: 'User already registered' });
 if (type) return res.status(errorMap.mapError(type)).json({ message });

 return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
 const { type, message } = await userService.getUsers();

 if (type) return res.status(errorMap.mapError(type)).json({ message });

 return res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.getUserById(Number(id));

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = { createUser, getUsers, getUserById };