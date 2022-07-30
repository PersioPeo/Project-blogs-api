const { validaUsuario } = require('../helpers');

const validateError = (req, res, next) => {
  const { error } = validaUsuario.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  next();
};
module.exports = validateError;