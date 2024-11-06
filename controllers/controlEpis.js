import Epi from '../models/Epis.js';

export const  addEpi = async (req, res) => {
    try {
        const { nome, tipo, id,quantidade } = req.body;
        const epi = await Epi.create({nome, tipo, id, quantidade});
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

export default {addEpi, buscarEpi, editarEpi,removerEpi }