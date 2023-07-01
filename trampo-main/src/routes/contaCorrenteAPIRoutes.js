const express = require('express');
const router = express.Router();

const contaCorrenteController = require('../controllers/contaCorrenteController');

router.post('/cadastroView', contaCorrenteController.cadastroView);
router.post('/cadastrarConta', contaCorrenteController.cadastrarConta);
router.get('/acessarConta', contaCorrenteController.contaView);

module.exports = router;