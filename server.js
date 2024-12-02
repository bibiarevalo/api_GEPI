import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import sequelize from './dataBase/db.js'; 
import funcionariosRouter from "./routers/routerFuncionarios.js"; 
import episRouter from "./routers/routerEpis.js"; 
import authRouter from "./routers/routerAuth.js"; 
const porta = 6969

const app = express()
app.use(cors())
app.use(bodyParser.json())

try {
    await sequelize.sync()
} catch (e) {
    console.log(e)
}

app.use('/funcionarios', funcionariosRouter);
app.use('/epis', episRouter);
app.use('/auth', authRouter);

app.listen(porta, () => { console.log("server rodando na porta " + porta) })
