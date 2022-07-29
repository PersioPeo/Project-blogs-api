const jwtGerador = require('../helpers/jwtGerador');
const usersService = require('../services/usersService');
const validaUsuario = require('../helpers/validaUsuario');

const criarController = async (req, res) => {
    const { displyName, email, password, image } = req.body;
    const { error } = validaUsuario.validate(req.body);
    if (error) { 
        const [code, message] = error.message.split('|');
        return res.status(code).json({ message });
    }
    const [row, created] = await usersService.criarUsuario(displyName, email, password, image);
    if (!created) {
        return res.status(400).json({ message: 'User already registered' });
    }
    const token = jwtGerador({ email: row.dataValues.email });
    return res.status(201).json({ token });
};

const listarController = async (req, res) => { 
    const result = await usersService.listarUsuarios();
    return res.status(200).json(result);
};

const pegarPorIdController = async (req, res) => {
    const { id } = req.params;
    const result = await usersService.pegarPorId(id);
    if (!result) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(result);
};

const removerController = async (req, res) => {
    const { id } = req.params;
    await usersService.removerUsuario(id); 
    
    return res.status(204).end();
};

module.exports = {
    criarController,
    listarController,
    pegarPorIdController,
    removerController,
};