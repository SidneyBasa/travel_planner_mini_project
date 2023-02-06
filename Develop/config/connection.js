// Monday February 6 2023
// UW coding bootcamp
// Module 13 object relational model
// Sidney Basa

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize (
    // 'travel_db',
    // 'root',
    // 'password',
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // DB_NAME='travel_database'
    // DB_PASSWORD='Vinpocetine7#'
    // DB_USER='root'
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;