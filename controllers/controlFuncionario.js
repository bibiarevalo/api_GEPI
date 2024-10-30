const database = require('../dataBase/dataBase.js')
const Funcionarios = require('../models/Funcionarios.js');

exports.addFuncionario = async (req, res) => {
    try {
        const { nome, email, matricula } = req.body;
        const funcionarios = await Funcionarios.create({nome, email, matricula});
        return res.status(201).json(funcionarios);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao cadastrar funcionário.' });
    }
};

exports.buscarFuncionario = async (req, res) => {
    try {
        const funcionarios = await Funcionarios.findAll({ attributes: ['matricula'] });
        return res.status(200).json(funcionarios);
    } catch (error) {
        return res.status(404).json({ error: 'Erro ao buscar funcionário.' });
    }
};

exports.atualizarFuncionario = async (req, res) => {
    try {
        const { nome, email, matricula } = req.body;
        const funcionarios = await Funcionarios.findByPk(req.params.matricula);
        if (funcionarios) {
            await funcionarios.update({ nome, email, matricula });
            return res.status(200).json(funcionarios);
        } else {
            return res.status(404).json({ error: 'funcionário não encontrada.' });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao atualizar funcionário.' });
    }
};

exports.removerFuncionario = async (req, res) => {
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
