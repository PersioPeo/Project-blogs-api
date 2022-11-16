const { User } = require('../database/models');

const criarLoginService = async (email, password) => { 
    const user = await User.findOne({ where: { email, password } });    
    return user;
};
module.exports = {
    criarLoginService,
};