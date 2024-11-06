import express from "express"
import {addEpi, buscarEpi, editarEpi,removerEpi } from "../controllers/controlEpis.js"
const router = express.Router();



router.post('/cadastrar', addEpi);
router.delete('/remover/:id', removerEpi);
router.put('/editar/:id', editarEpi);
router.get('/buscar', buscarEpi);


export default router;