const snakecaseKeys = require('snakecase-keys');
const camelize = require('camelize');
const { User } = require('../models');
const { generateToken } = require('../auth/jwtFunctions');

const createUser = async ({ displayName, email, password, image }) => {
 const newUser = await User.create({ displayName, email, password, image });

 const { password: _password, ...userWithoutPassword } = newUser.dataValues;
 
 const token = generateToken(userWithoutPassword);

 if (!newUser) return { type: 'FAIL_ON_CREATE_USER', message: 'Fail on create user' };
 return { type: null, message: userWithoutPassword, token };
};

const getUserByEmail = async ({ email }) => {
  // problema quando descontroi aqui
 const user = await User.findOne({ where: { email } });

return user;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  if (!users) return { type: 'USERS_NOT_FOUND', message: 'Cannot find users' };
  return { type: null, message: users };
};

const getUserById = async (userId) => {
  const user = await User.findOne(({
     where: { id: userId },
     attributes: { exclude: ['password'] },
     }));
  const camelizeUser = camelize(user);

  if (!camelizeUser) {
    return { type: 'USERID_NOT_FOUND', message: 'User does not exist' };
  } 
  
  const { id, displayName, email, image } = camelizeUser.dataValues;
  const result = { id, displayName, email, image };
  
  return { type: null, message: result };
};

module.exports = { 
   createUser,
   getUserByEmail,
   getUsers,
   getUserById,
   };