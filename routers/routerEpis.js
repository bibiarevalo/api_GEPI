import express from "express"
import {addEpi, buscarEpi, editarEpi,removerEpi, retiradaEDevolucaoEpi } from "../controllers/controlEpis.js"
const router = express.Router();



router.post('/cadastrar', addEpi);
router.delete('/remover/:id', removerEpi);
router.put('/editar/:id', editarEpi);
router.get('/buscar', buscarEpi);
router.post('/gerenciamento', retiradaEDevolucaoEpi)


export default router;      