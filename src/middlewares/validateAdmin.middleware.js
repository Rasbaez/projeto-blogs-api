const Joi = require('joi');

const validateAdmin = Joi.object({
    email: Joi
    .string()
    .required()
    .email({ tlds: { allow: ['com', 'net'] } }),

    password: Joi
     .string()
     .required()
     .pattern(
      new RegExp('^[a-zA-Z0-9]{3,30}$'),
      ),
  }).messages({
    'any.required': 'Invalid fields',
    'string.empty': 'Some required fields are missing',
  });

  const isAdmin = (req, res, next) => {
    const { body } = req;
    const { error } = validateAdmin.validate(body);
 
    if (error) return res.status(400).json({ message: error.details[0].message });
    return next();
  };
module.exports = { isAdmin };