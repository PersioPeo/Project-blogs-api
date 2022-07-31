const { User } = require('../database/models');

const criarService = async (displyName, email, password, image) => { 
    const user = await User.findOrCreate({
        where: { email },
        defaults: { displyName, password, image },
    });
    return user;
};

const listarService = async () => { 
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const pegarPorIdService = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
};

const removerService = async (id) => {
    await User.destroy({ where: { id } });
    return true;
};

module.exports = {
    criarService,
    listarService,
    pegarPorIdService,
    removerService,
};
