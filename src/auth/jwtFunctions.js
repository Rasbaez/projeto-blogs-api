const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (user) => {
  // console.log({ data: user });
 const token = jwt.sign({ data: user }, JWT_SECRET, {
  expiresIn: '40m',
  algorithm: 'HS256',
 });

return token;
};

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, JWT_SECRET);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  generateToken,
  verifyToken,

};
