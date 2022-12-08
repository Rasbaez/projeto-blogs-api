const { generateToken } = require('../auth/jwtFunctions');

const userService = require('../service/user.service');

const loginUser = async (req, res) => {
 const { body } = req;

 const user = await userService.getUserByEmail(body);

 if (!user || user.password !== body.password) {
  return res.status(400).json({ message: 'Invalid fields' });
 }

const token = generateToken(user);
 if (token) return res.status(200).json({ token });
};

module.exports = { 
  loginUser,
};