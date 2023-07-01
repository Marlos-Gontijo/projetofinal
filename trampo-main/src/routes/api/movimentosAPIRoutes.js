const express = require('express');
const router = express.Router();

const movimentosAPIController = require('../../controllers/api/movimentosAPIController');

router.post('/api/usuario/movimentos', movimentosAPIController.movimentos);


module.exports = router;