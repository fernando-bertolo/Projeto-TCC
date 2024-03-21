const Sequelize = require("sequelize");
const database = require("../../database");

const AcessoriosVeiculos = database.define("AcessoriosVeiculos", {
  idAcessorioVeiculo: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  idAcessorio: {
    type: Sequelize.UUID,
    reference: {
      model: "Acessorios",
      key: "idAcessorio",
    },
  },
  idVeiculo: {
    type: Sequelize.UUID,
    reference: {
      model: "Veiculos",
      key: "idVeiculo",
    },
  },
});

module.exports = AcessoriosVeiculos;
