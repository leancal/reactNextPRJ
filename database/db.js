import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const db = new Sequelize('aiwa_web', 'aiwa_web', '@BaseSitioAiwa2024@', {
    host: 'totalhome.xvserver.com',
    dialect: 'mysql',
    dialectModule: mysql2,

});

export default db;

// import { Sequelize } from "sequelize";
// import mysql2 from "mysql2";
// import dotenv from "dotenv";

// // Cargar variables de entorno
// dotenv.config();

// const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     dialectModule: mysql2,
//     //logging: false, // Opcional, para desactivar el registro de SQL en la consola
// });

// export default db;


