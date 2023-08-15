const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verificaAdmin = require('../middlewares/verificaAdmin');
const verificaToken = require('../middlewares/verificaToken');

router.get('/usuarios',verificaToken, verificaAdmin, adminController.getUsuarios);

router.delete('/usuario/:nome', verificaToken, verificaAdmin, adminController.deleteUsuarios);

router.put('/usuario/:nome', verificaToken, verificaAdmin, adminController.atualizaUsuarios);

module.exports = router;