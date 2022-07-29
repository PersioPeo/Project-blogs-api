const { Category } = require('../database/models');

const criarService = async ({ name }) => { 
    const category = await Category.create({ name });
    return category;
};

const listarService = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    criarService,
    listarService,
};