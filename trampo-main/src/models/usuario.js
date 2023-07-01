const Sequelize = require('sequelize');
const database = require('../db');
 
const Usuario = database.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_idPessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pessoa', 
            key: 'idPessoa' 
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    

});
 
module.exports = Usuario;