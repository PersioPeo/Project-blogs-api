const { Op } = require('sequelize');
const { User, BlogPost, Category } = require('../database/models');

const criarService = async (title, content, categoryId, tokenData) => { 
    const newResult = await BlogPost.create(
        {
            title,
            content,
            categoryId,
            published: new Date(),
            updated: new Date(),
            userId: tokenData.id,

        },
    );
    return newResult;
};

const listarService = async () => { 
    const result = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes:
        { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return result;
};

const pegarPorIdService = async (id) => { 
    const result = await BlogPost.findOne({
      where: { id },
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: 'password' } },
        { model:
            Category,
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    return result;
};

const atualizarService = async (id, title, content, categoryIds) => {
    const result = await BlogPost.update(
        {
      title,
      content,
      categoryIds,
      updated: new Date(),
    }, { where: { id } },
);
    return result;
};

const criarPorIdService = async (id) => { 
    const result = await BlogPost.findOne({
      attributes: { exclude: ['published', 'updated'] },
      where: { id },
      include: [{ model: Category,
        as: 'categories',
        through: { attributes: [] },
      }],
    });
    return result;
};

const removerService = async (id) => { 
    const result = await BlogPost.destroy({
      where: { id },
    });
    return result;
};

const criarSearchService = async (q) => { 
    const result = await BlogPost.findAll({
      where: !q ? '' : { [Op.or]: [{ title: q }, { content: q }] },
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: 'password' } },
        { model:
            Category,
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    return result;
};

module.exports = {
    criarService,
    listarService,
    pegarPorIdService,
    atualizarService,
    criarPorIdService,
    removerService,
    criarSearchService,
};