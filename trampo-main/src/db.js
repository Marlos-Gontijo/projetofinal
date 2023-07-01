const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto_programação_web', 'root', 'senha', {
    host: "localhost",
    dialect: 'mysql',
    storage: './database.mysql'
})

module.exports = sequelize;