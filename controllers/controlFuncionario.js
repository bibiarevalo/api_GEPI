import Funcionarios from '../models/Funcionarios.js';

export const  addFuncionario = async (req, res) => {
    try {
        const { nome, email, matricula } = req.body;
        const funcionarios = await Funcionarios.create({nome, email, matricula});
        return res.status(201).json(funcionarios);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: 'Erro ao cadastrar funcionário.' });
    }
};

export const buscarFuncionario = async (req, res) => {
    try {
        const funcionarios = await Funcionarios.findAll({ attributes: ['matricula'] });
        return res.status(200).json(funcionarios);
    } catch (error) {
        return res.status(404).json({ error: 'Erro ao buscar funcionário.' });
    }
};

export const atualizarFuncionario = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const funcionarios = await Funcionarios.findByPk(req.params.matricula);
        if (funcionarios) {
            await funcionarios.update({ nome, email });
            return res.status(200).json(funcionarios);
        } else {
            return res.status(404).json({ error: 'Funcionário não encontrado.' });
        }
    } catch (error) { 
        console.log(error); 
        return res.status(400).json({ error: 'Erro ao atualizar funcionário.' });
    }
};

export const removerFuncionario = async (req, res) => {
    try {
        const funcionarios = await Funcionarios.findByPk(req.params.matricula);
        if (funcionarios) {
            await funcionarios.destroy();
            return res.status(200).json({ message: 'funcionário removido com sucesso.' });
        } else {
            return res.status(404).json({ error: 'funcionário não encontrada.' });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao remover funcionário.' });
    }
};

export default {addFuncionario, buscarFuncionario, atualizarFuncionario,removerFuncionario }