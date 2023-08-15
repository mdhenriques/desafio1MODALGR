const verificaAdmin = (req, res, next) => {
    if (req.usuario && req.usuario.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: 'Acesso permitido apenas para administrador' });
    }
}

module.exports = verificaAdmin;