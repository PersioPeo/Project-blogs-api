const jwt = require('jsonwebtoken');

const tempoDeExpiracao = {
    expiresIn: '7h',
};
const senhaSecreta = process.env.SENHA_SECRETA;

module.exports = (data = {}) => jwt.sign({ data }, senhaSecreta, tempoDeExpiracao);