const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const verifyToken = async (req, res, next) => {
   const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findPk(payload.data.id);

    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;
  } catch (error) {
    if (!token) return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = { verifyToken };