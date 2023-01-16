const Joi = require('joi');

const Category = Joi.object({
  name: Joi
  .string()
  .required()
  .messages({
    'any.required': '{#label} is required',
    'string.empty': '{#label} is required',
  }),
});

const validateCaterory = (req, res, next) => {
  const { body } = req;
  const { error } = Category.validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });
  return next();
};

module.exports = { validateCaterory };