import express from "express"
import {sla} from "../controllers/controlEpis.js"
const router = express.Router();

//router.get('/', sla)

router.post('/cadastrar', controller.addEpi);
router.delete('/remover/:id', controller.removerEpi);
router.put('/editar/:id', controller.editarEpi);
router.get('/buscar', controller.buscarEpi);


export default router;