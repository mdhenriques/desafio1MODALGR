require('dotenv').config({ path: '../../config/.env'});
const jwt = require('jsonwebtoken');
const chaveSecreta = process.env.CHAVE_SECRETA;

const verificaToken = (req, res, next) => {
    const header = req.header('Authorization');

    if(!header) {
        return res.status(401).json({ message: 'Token nao fornecido'})
    }
    const token = header.split(' ')[1];

    try {
        const tokenDecodificado = jwt.verify(token, chaveSecreta);

        req.usuario = tokenDecodificado
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token Invalido' });
    }
}

module.exports = verificaToken;