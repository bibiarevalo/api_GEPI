import express from "express";
import controller from "../controllers/controlFuncionario"; 

const router = express.Router();

router.post('/cadastrar', controller.addFuncionario);
router.delete('/remover/:id', controller.removerFuncionario);
router.put('/editar/:id', controller.atualizarFuncionario);
router.get('/buscar', controller.buscarFuncionario);

export default router;