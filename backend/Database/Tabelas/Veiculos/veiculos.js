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
  idStatus: {
    type: Sequelize.UUID,
  },
  ano: {
    type: Sequelize.STRING,
  },
  combustivel: {
    type: Sequelize.STRING,
  },
  cor: {
    type: Sequelize.STRING,
  },
  quilometragem: {
    type: Sequelize.DECIMAL(10, 3), //  Permite até 10 dígitos no total, com 3 dígitos após o ponto decimal
  },
  valor: {
    type: Sequelize.DECIMAL(10, 3), //  Permite até 10 dígitos no total, com 3 dígitos após o ponto decimal
  },
  placa: {
    type: Sequelize.STRING,
  },
});

module.exports = Veiculos;
