const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (body) => {
 const payload = {
  email: body.email,
  admin: true,
};
 const token = jwt.sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '5m',
});

return { token };
};

module.exports = {
  generateToken,
  
};
