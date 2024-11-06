import { DataTypes } from 'sequelize'
import sequelize from '../dataBase/db.js'

const Epi = sequelize.define('Epi', {

    id: {
    
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

});


export default Epi