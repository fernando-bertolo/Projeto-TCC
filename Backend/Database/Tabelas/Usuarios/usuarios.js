const Sequelize = require("sequelize");
const database = require("../../database.js");

const usuarios = database.define("Usuarios", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = usuarios;