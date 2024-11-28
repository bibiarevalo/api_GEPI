import Epi from '../models/Epis.js';
import Funcionarios from '../models/Funcionarios.js';
import Registro from '../models/Registro.js'

export const addEpi = async (req, res) => {
    try {
        const { nome, tipo, id, quantidade } = req.body;
        const epi = await Epi.create({ nome, tipo, id, quantidade });
        return res.status(201).json(epi);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: 'Erro ao cadastrar epi.' });
    }
};

export const buscarEpi = async (req, res) => {
    try {
        const epi = await Epi.findAll({ attributes: ['id'] });
        return res.status(200).json(epi);
    } catch (error) {
        return res.status(404).json({ error: 'Erro ao buscar epi.' });
    }
};

export const editarEpi = async (req, res) => {
    try {
        const { nome, tipo, quantidade } = req.body;
        const epi = await Epi.findByPk(req.params.id);
        if (epi) {
            await epi.update({ nome, tipo, quantidade });
            return res.status(200).json(epi);
        } else {
            return res.status(404).json({ error: 'epi não encontrada.' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'Erro ao atualizar epi.' });
    }
};

export const removerEpi = async (req, res) => {
    try {
        const epi = await Epi.findByPk(req.params.id);
        if (epi) {
            await epi.destroy();
            return res.status(200).json({ message: 'epi removido com sucesso.' });
        } else {
            return res.status(404).json({ error: 'epi não encontrada.' });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao remover epi.' });
    }
};

export const retiradaEDevolucaoEpi = async (req, res) => {
    try {
        const { matricula, id, acao } = req.body || {};

        if (!["Retirar", "Devolver"].includes(acao)) {
            return res.status(400).json({ error: "Ação inválida. Use 'Retirar' ou 'Devolver'." });
        }

        const funcionario = await Funcionarios.findOne({ where: { matricula } });
        const epi = await Epi.findOne({ where: { id } });

        if (!funcionario || !epi) {
            return res.status(404).json({ error: 'Funcionário ou EPI não encontrado.' });
        }
     
        const registro = await Registro.create({ 
            funcionario_matricula: matricula, 
            epi_id: id, 
            data: new Date(),
            acao 
        });
        return res.status(201).json(registro);

    } catch (error) {
        return res.status(400).json({ error: 'Erro ao registrar retirada ou devolução.' });
    }
}

export default { addEpi, buscarEpi, editarEpi, removerEpi, retiradaEDevolucaoEpi }