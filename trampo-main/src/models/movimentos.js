const Sequelize = require('sequelize');
const database = require('../db');
 
const Movimentos = database.define('tabela_movimentos', {
    idMovimento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_idConta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'conta_corrente', 
            key: 'idConta' 
        }
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    dataMovimento: {
        type: Sequelize.DATE,
        allowNull: false,
        
    },
    valorMovimento: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    contaOrigem: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    contaDestino: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    observacao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
});
 
module.exports = Movimentos;





