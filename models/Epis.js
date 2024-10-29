const express = require('express')
const router = express.Router();
const controller = require('../controllers/controlEpis');

router.post('/cadastrar',controller.addEpi)
router.delete('/remover', controller.removerEpi)
router.put('/editar', controller.editarEpi)
router.get('/buscar', controller.buscarEpi)

module.exports = router