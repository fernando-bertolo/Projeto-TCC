const Sequelize = require("sequelize");
const database = require("../../database");

const Veiculos = database.define("Veiculos", {
  idVeiculo: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  idMarca: {
    type: Sequelize.UUID,
    references: {
      model: "Marcas",
      key: "idMarca",
    },
  },
  idModelo: {
    type: Sequelize.UUID,
    references: {
      model: "Modelos",
      key: "idModelo",
    },
  },
  idVersao: {
    type: Sequelize.UUID,
    references: {
      model: "Versoes",
      key: "idVersao",
    },
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  combustivel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quilometragem: {
    type: Sequelize.DECIMAL(10, 3), //  Permite até 10 dígitos no total, com 3 dígitos após o ponto decimal
    allowNull: false,
  },
  valor: {
    type: Sequelize.DECIMAL(10, 3), //  Permite até 10 dígitos no total, com 3 dígitos após o ponto decimal
    allowNull: false,
  },
  placa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Veiculos;
