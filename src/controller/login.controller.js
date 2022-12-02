const { generateToken } = require('../auth/token');

const userService = require('../service/user.service');

const loginUser = async (req, res) => {
 const { body } = req;
 const { token } = generateToken(body);

 const user = await userService.getUserByEmail(body.email);
 if (!user || user.password !== body.password) {
  return res.status(400).json({ message: 'Invalid fields' });
 }

 if (token) return res.status(200).json({ token });
};

module.exports = { 
  loginUser,
};