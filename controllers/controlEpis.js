import Teste from "../models/Epis.js"

const sla = async (req, res) => {
    const data = await Teste.findAll()
    res.status(200).send(data)
}

export {sla}