const express = require('express')
const router = express.Router();
const controller = require('../controllers/controlEpis');

router.post('/cadastrar', controller.addFuncionario)
router.delete('/remover', controller.removerFuncionario)
router.put('/editar', controller.atualizarFuncionario)
router.get('/buscar', controller.buscarFuncionario)

module.exports = router