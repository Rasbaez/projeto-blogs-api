const Joi = require('joi');

const validateNewUser = Joi.object({
  displayName: Joi.string().required().min(8)
  .message('"displayName" length must be at least 8 characters long'),

  email: Joi
  .string()
  .required()
  .email({ tlds: { allow: ['com', 'net'] } })
  .message('"email" must be a valid email'),

  password: Joi
  .string()
  .required()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .min(6)
  .message('"password" length must be at least 6 characters long'),

  image: Joi.string().min(50),
});

const newUserVerify = (req, res, next) => {
  const { body } = req;
  const { error } = validateNewUser.validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });
  return next();
};

module.exports = { newUserVerify };