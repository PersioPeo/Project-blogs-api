const { Category } = require('../database/models');

module.exports = async ({ categoryIds }) => {
  const categories = await Category.findAll();
  const listCategoryIds = categories.map((category) => category.id);
  const hasCategories = categoryIds.every((categoryId) => listCategoryIds.includes(categoryId));
  return hasCategories;
};