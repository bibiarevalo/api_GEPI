import { DataTypes } from 'sequelize'
import sequelize from '../dataBase/db.js'

const Funcionarios = sequelize.define('Funcionarios', {

    matricula: {
        type: DataTypes.
            INTEGER,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default Funcionarios