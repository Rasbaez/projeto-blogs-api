const { Category } = require('../models');
// no sequelize sempre devemos importar direto de models, nunca de models/index

const createCategory = async ({ name }) => {
  const registeredCategory = await Category.create(
    { name },
    );

  if (!registeredCategory) {
    return { type: 'CATEGORY_NOT_REGISTRED', message: 'Cannot register category' };
  }
  return { type: null, message: registeredCategory };
};

const getCategories = async () => {
 const categories = await Category.findAll();

 if (!categories) return { type: 'CATEGORIES_NOT_FOUND', message: 'Cannot found categories' };
 return { type: null, message: categories };
};

module.exports = {
  createCategory,
  getCategories,
};