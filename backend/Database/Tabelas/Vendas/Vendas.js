const Sequelize = require("sequelize");
const database = require("../../database");

const Vendas = database.define("Vendas", {
  idVenda: {
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
  idUsuario: {
    type: Sequelize.UUID,
    references: {
      model: "Usuarios",
      key: "id",
    },
  },
  cpfCliente: {
    type: Sequelize.String,
    references: {
      model: "Clientes",
      key: "cpf",
    },
  },
  valorVenda: {
    type: Sequelize.DECIMAL(10, 3),
    allowNull: false,
  },
  dataVenda: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW, //Será inserido a data atual
  },
});

module.exports = Vendas;
