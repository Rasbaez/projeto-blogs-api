const categoriesService = require('../service/categories.service');
const { errorMap } = require('../utils/errorMap');

const createCategory = async (req, res) => {
  const { body } = req;
  const { type, message } = await categoriesService.createCategory(body);
  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  } return res.status(201).json(message);
};

const getCategories = async (req, res) => {
  const { type, message } = await categoriesService.getCategories();
  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  } return res.status(200).json(message);
};

module.exports = { createCategory, getCategories };