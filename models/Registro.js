import { DataTypes } from 'sequelize'
import sequelize from '../dataBase/db.js'
import Funcionarios from './Funcionarios.js'
import Epi from './Epis.js'

const Registro = sequelize.define('Registro', {
    funcionario_matricula: {
        type: DataTypes.INTEGER,
        foreingKey: {
            model: Funcionarios,
            key: "matricula",
        },
    },

    epi_id: {
        type: DataTypes.INTEGER,
        foreingKey:{
            model:Epi,
            key: "id",
        },
    },
          
    data: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
})

export default Registro