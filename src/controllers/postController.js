const { verifyCategories } = require('../helpers');
const { PostCategory } = require('../database/models');
const postService = require('../services/postService');

const criarController = async (req, res) => { 
    const { title, content, categoryIds } = req.body;
    const { tokenData } = req;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }
    const result = await verifyCategories(req.body);
    if (!result) {
        return res.status(400).json({
            message: '"categoryIds" not found',
        });
    }
    const newResult = await postService.criarService(title, content, categoryIds, tokenData);

    await Promise.all(categoryIds
      .map((id) => PostCategory
      .create({ postId: newResult.dataValues.id, categoryId: id })));
    return res.status(201).json(newResult);
};

const listarController = async (req, res) => { 
    const result = await postService.listarService();
    return res.status(200).json(result);
};

const pegarPorIdController = async (req, res) => { 
    const { id } = req.params;
    const resul = await postService.listarService();
    const result = resul.some((post) => post.id === Number(id));
    if (!result) return res.status(404).json({ message: 'Post does not exist' }); 
    const post = await postService.pegarPorIdService(id);
    return res.status(200).json(post);
};

const atualizarController = async (req, res) => { 
  const { tokenData } = req;
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  if (tokenData.id !== +id) return res.status(401).json({ message: 'Unauthorized user' });
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
    if (!title || !content) {
        return res.status(400).json(
            { message: 'Some required fields are missing' },
);
    }
    
    await postService.atualizarService(id, title, content, categoryIds);
    const result = await postService.pegarPorIdService(id);
    return res.status(200).json(result);
};

const removerController = async (req, res) => { 
    const { id } = req.params;
    const { tokenData } = req;
    const resul = await postService.listarService();
    const result = resul.some((post) => post.id === Number(id));
    if (!result) return res.status(404).json({ message: 'Post does not exist' });
    const test = resul
    .some(({ dataValues }) => +dataValues.userId === +tokenData.id && +dataValues.id === +id);
    if (!test) return res.status(401).json({ message: 'Unauthorized user' });
    await postService.removerService(id);
    return res.status(204).end();
};

const atualizarSearchController = async (req, res) => { 
    const { q } = req.query;
    const result = await postService.criarSearchService(q);
    return res.status(200).json(result);
};

module.exports = {
    criarController,
    listarController,
    pegarPorIdController,
    atualizarController,
    removerController,
    atualizarSearchController,
};
