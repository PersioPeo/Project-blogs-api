const jwt = require('jsonwebtoken');

const config = {
  expiresIn: '7d',
};
const SENHA = process.env.JWT_SECRET;
module.exports = (data = {}) => jwt.sign({ data }, SENHA, config);