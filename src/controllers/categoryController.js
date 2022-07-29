const categoryService = require('../services/categoryService');

const criarController = async (req, res) => { 
    const { name } = req.body;
    if (!name) { 
        return res.status(400).json({ message: '"name" is required' });
    }
    const category = await categoryService.criar({ name });
    return res.status(201).json(category);
};

const listarController = async (req, res) => { 
    const categories = await categoryService.listar();
    return res.status(200).json(categories);
};

module.exports = {
    criarController,
    listarController,
};