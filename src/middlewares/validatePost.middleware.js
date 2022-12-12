const Joi = require('joi');
const categoriesService = require('../service/categories.service');
const postsService = require('../service/posts.service');

const validatePost = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
});

const validateUpdatePost = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
});

const validateUpdate = async (req, res, next) => {
    const post = req.body;
    const { error } = validateUpdatePost.validate(post);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    return next();
};
const validate = async (req, res, next) => {
    const post = req.body;
    const { error } = validatePost.validate(post);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    return next();
};

const validateUser = async (req, res, next) => {
    const { id: userId } = req.user;
     const { id } = req.params;

    try {
        const post = await postsService.getPostById(id);
        if (post.userId !== userId) {
            return res.status(401).json({ message: 'Unauthorized user' }); 
        } 
    } catch (error) {
             res.status(404).json({ message: 'Post does not exist' });
    }
    return next();
};

const validateCategoryId = async (req, res, next) => {
    const { categoryIds } = req.body;

    const verifyCategory = await Promise.all(categoryIds
    .map((categoryId) => categoriesService.getCategoryById(categoryId)));

    const isAllValid = verifyCategory.every((item) => item !== null);
    if (!isAllValid) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    return next();
};

module.exports = {
    validate,
    validateCategoryId,
    validateUpdate,
    validateUser,
};