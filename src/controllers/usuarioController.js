const UserModel = require('../models/user');
var jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../config/.env'}); //Chave secreta e salt rounds
const bcrypt = require('bcrypt');


const cadastrarUsuario = async (req, res) => {
    try {      
      const { usuario, senha } = req.body;
      const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);      
      const hashSenha = await bcrypt.hash(senha, saltRounds);  

      const novoUsuario = new UserModel({
        usuario,
        senha: hashSenha,
      })
      
      console.log('Novo usuário criado:', novoUsuario);
  
      await novoUsuario.save();
  
      res.status(201).json(novoUsuario);
    } catch (err) {
      console.error(err);      
      res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
};

const loginDeUsuario = async (req, res) => {
    
    try {
        const { usuario, senha } = req.body;
        console.log({ usuario, senha });
        const usuarioExistente = await UserModel.findOne({ usuario });
        console.log(usuarioExistente);

        if(!usuarioExistente) {
            return res.status(401).json({ message: 'Usuario nao encontrado' });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuarioExistente.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        
        const chaveSecreta = process.env.CHAVE_SECRETA;
        const dadosDoUsuario = {
            usuario: usuarioExistente.usuario,
            isAdmin: usuarioExistente.isAdmin
        }

        const token = jwt.sign( dadosDoUsuario, chaveSecreta, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
};

module.exports = {
  cadastrarUsuario,
  loginDeUsuario,
}

