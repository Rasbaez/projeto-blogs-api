const { verifyToken } = require('../auth/jwtFunctions');
const { getUserByEmail } = require('../service/user.service');

  module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const decoded = verifyToken(token);
      const user = await getUserByEmail(decoded.data);
      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };