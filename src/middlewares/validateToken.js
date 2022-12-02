const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization.length) return res.status(401).json({ message: 'Token not found' });
  // fonte TokenExpiredError: jwt expired
  jwt.verify(authorization, JWT_SECRET, (err) => {
    if (err) {
       return res.status(401).json({ message: 'Expired or invalid token' });
    } return next(); 
  });
};

module.exports = { verifyToken };