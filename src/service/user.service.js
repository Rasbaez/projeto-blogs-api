const snakecaseKeys = require('snakecase-keys');
const { User } = require('../models');

const createUser = async (body) => {
 const newUser = await User.create({ ...snakecaseKeys(body) });

 const { password: _password, ...userWithoutPassword } = newUser.dataValues;

 if (!newUser) return { type: 'FAIL_ON_CREATE_USER', message: 'Fail on create user' };
 return { type: null, message: userWithoutPassword };
};

const getUserByEmail = async (userEmail) => {
 const user = await User.findOne({ where: { email: userEmail } });

return user;
};

const getUsers = async () => {
  const users = await User.findAll();

 const result = users.map(({ id, display_name: displayName, email, image }) => (
  { id, displayName, email, image }));

  if (!users) return { type: 'USERS_NOT_FOUND', message: 'Cannot find users' };
  return { type: null, message: result };
};

module.exports = { 
   createUser,
   getUserByEmail,
   getUsers,
   };