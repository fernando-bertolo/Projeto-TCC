const Sequelize = require("sequelize");
const database = require("../../database.js");

const usuarios = database.define("Usuarios", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
    },
    senhaResetaToken: {
        type: Sequelize.STRING,
    },
    tokenExpiracao: {
        type: Sequelize.DATE,
    },
})

module.exports = usuarios;