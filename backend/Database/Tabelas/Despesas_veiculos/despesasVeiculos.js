const Sequelize = require("sequelize");
const database = require("../../database");

const DespesasVeiculos = database.define("DespesasVeiculos", {
  idDespesaVeiculo: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
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
