const Joi = require('joi');
const categoriesService = require('../service/categories.service');

const validatePost = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
});

const validate = async (req, res, next) => {
    const post = req.body;
    const { error } = validatePost.validate(post);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

const validateCategoryId = async (req, res, next) => {
    const { categoryIds } = req.body;

    const verifyCategory = await Promise.all(categoryIds
    .map((categoryId) => categoriesService.getCategoryById(categoryId)));

    const isAllValid = verifyCategory.every((item) => item !== null);
    if (!isAllValid) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    next();
};

module.exports = {
    validate,
    validateCategoryId,
};