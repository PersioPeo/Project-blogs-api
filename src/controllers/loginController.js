const jwtGerador = require('../helpers/jwtGerador');
const loginServices = require('../services/loginServices');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const result = await loginServices.login(email, password);
    if (!result) return res.status(404).json({ message: 'Invalid fields' });
    const token = jwtGerador({ id: result.id, email });
    return res.status(200).json({ token });
};
module.exports = { loginController };