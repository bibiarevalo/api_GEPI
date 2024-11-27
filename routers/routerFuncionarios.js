import express from "express";
import { addFuncionario, buscarFuncionario, atualizarFuncionario, removerFuncionario } from "../controllers/controlFuncionario.js";

const router = express.Router();

router.post('/cadastrar', addFuncionario);
router.delete('/remover/:matricula', removerFuncionario);
router.put('/editar/:matricula', atualizarFuncionario);
router.get('/buscar/:matricula', buscarFuncionario);

export default router;