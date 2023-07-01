const express = require('express');
const router = express.Router();

const pessoaAPIController = require('../../controllers/api/pessoaAPIController');

router.post('/api/pessoa/cadastrar', pessoaAPIController.cadastrarPessoa);


module.exports = router;