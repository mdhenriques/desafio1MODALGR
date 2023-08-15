const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '../../config/.env'});
//const saltRounds = process.env.SALT_ROUNDS;


const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UserModel.find({}, 'usuario -_id');
        res.json(usuarios);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar usuarios' });
    }
};

const deleteUsuarios = async (req, res) => {
    try {
        const nomeUsuario = req.params.nome;
        const usuarioDeletado = await UserModel.findOneAndDelete({ usuario: nomeUsuario });

        if (!usuarioDeletado) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        return res.status(200).json({ message: `Usuário ${nomeUsuario} deletado com sucesso` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
}

const atualizaUsuarios = async (req, res) => {
    
    try {
        const nomeUsuario = req.params.nome;
        const { novoUsuario, novaSenha } = req.body;
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);  
        console.log(novaSenha);
        console.log(saltRounds);      
        const hashNovaSenha = await bcrypt.hash(novaSenha, saltRounds);

        const usuarioAtualizado = await UserModel.findOneAndUpdate(
            { usuario: nomeUsuario },
            { usuario: novoUsuario, senha: hashNovaSenha },
            { new: true }
        );

        if (!usuarioAtualizado) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        return res.status(200).json({
            message: 'Usuário atualizado com sucesso',
            usuario: usuarioAtualizado
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
}

module.exports = {
    getUsuarios,
    deleteUsuarios,
    atualizaUsuarios,
};