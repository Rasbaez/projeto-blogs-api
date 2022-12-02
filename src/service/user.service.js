const snakecaseKeys = require('snakecase-keys');
const { generateToken } = require('../auth/token');
const { User } = require('../models');

const createUser = async (body) => {
 const newUser = await User.create({ ...snakecaseKeys(body) });

 const { password: _password, ...userWithoutPassword } = newUser.dataValues;

 const token = generateToken(userWithoutPassword);

 if (!newUser) return { type: 'FAIL_ON_CREATE_USER', message: 'Fail on create user' };
 return { type: null, message: userWithoutPassword, token };
};

const getUserByEmail = async (userEmail) => {
 const user = await User.findOne({ where: { email: userEmail } });

return user;
};

module.exports = { 
  createUser,
   getUserByEmail,
   };