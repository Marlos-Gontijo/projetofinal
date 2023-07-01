const Sequelize = require('sequelize');
const database = require('../db');
 
const ContaCorrente = database.define('conta_corrente', {
    idConta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario', 
            key: 'idUsuario' 
        }
    },
    numeroConta: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    nomeConta: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    dataAbertura: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    saldo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    
});
 
module.exports = ContaCorrente;