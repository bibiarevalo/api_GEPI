import { DataTypes } from 'sequelize'
import sequelize from '../dataBase/db.js'

const Teste = sequelize.define('Teste', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true
    }
})


export default Teste