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

module.exports = {
  createCategory,
};