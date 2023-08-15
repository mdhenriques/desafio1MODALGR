const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


router.post('/cadastro', usuarioController.cadastrarUsuario); 
      

router.post('/login', usuarioController.loginDeUsuario);


module.exports = router;