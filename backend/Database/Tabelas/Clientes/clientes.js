const Sequelize = require("sequelize");
const database = require("../../database.js");

const clientes = database.define("Clientes", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nacionalidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estadoCivil: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  celular: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = clientes;
