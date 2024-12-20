import Epi from '../models/Epis.js';
import Funcionarios from '../models/Funcionarios.js';
import Registro from '../models/Registro.js';

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


export const listHistorico = async (req, res) => {
    try {
        const registros = await Registro.findAll({
            attributes: ['data', 'acao'], 
            include: [
                {
                    model: Funcionarios,
                    attributes: ['nome', 'matricula']
                },
                {
                    model: Epi,
                    attributes: ['nome'] 
                }
            ]
        });
        return res.status(200).json(registros);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao listar histórico' });
    }
};


export default {addFuncionario, buscarFuncionario, atualizarFuncionario,removerFuncionario, listHistorico }