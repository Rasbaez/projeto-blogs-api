const { generateToken } = require('../auth/jwtFunctions');
const userService = require('../service/user.service');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const { body } = req;

  const user = await userService.getUserByEmail(body);
//  console.log(user);
 const { type, message } = await userService.createUser(body);

 if (user) return res.status(409).json({ message: 'User already registered' });
 if (type) return res.status(errorMap.mapError(type)).json({ message });

 const token = generateToken(message);

 return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
 const { type, message } = await userService.getUsers();
//  console.log(message);
 if (type) return res.status(errorMap.mapError(type)).json({ message });

 return res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = { createUser, getUsers, getUserById };