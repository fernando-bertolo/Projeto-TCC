const Sequelize = require("sequelize");
const database = require("../../database.js");

const usuarios = database.define("Usuarios", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
    unique: {
      args: true,
      msg: "Este e-mail já esta registrado, por favor escolha outro",
    },
    validate: {
      isEmail: {
        msg: "Adicione um e-mail valido",
      },
      notEmpty: {
        msg: "Favor coloque um e-mail",
      },
    },
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
  tokenSenha: {
    type: Sequelize.STRING,
  },
  horaExpiracaoToken: {
    type: Sequelize.DATE,
  },
});

module.exports = usuarios;
