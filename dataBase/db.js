import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://andre_rosa1:rgHPNt2eJEL1nc-Tp1-6Vw@sulky-chicken-2756.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


export default sequelize