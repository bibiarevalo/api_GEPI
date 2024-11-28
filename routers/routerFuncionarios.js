import express from "express";
import { addFuncionario, buscarFuncionario, atualizarFuncionario, removerFuncionario, listHistorico } from "../controllers/controlFuncionario.js";

const router = express.Router();

router.post('/cadastrar', addFuncionario);
router.delete('/remover/:matricula', removerFuncionario);
router.put('/editar/:matricula', atualizarFuncionario);
router.get('/historico', listHistorico);

router.get('/buscar/:matricula', buscarFuncionario);


export default router;