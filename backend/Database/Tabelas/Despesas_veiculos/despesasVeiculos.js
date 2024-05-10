const Sequelize = require("sequelize");
const database = require("../../database");

const DespesasVeiculos = database.define("DespesasVeiculos", {
  idDespesaVeiculo: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  idVeiculo: {
    type: Sequelize.UUID,
    references: {
      model: "Veiculos",
      key: "idVeiculo",
    },
  },
  idDespesa: {
    type: Sequelize.UUID,
    references: {
      model: "Despesas",
      key: "idDespesa",
    },
  },
});

module.exports = DespesasVeiculos;
