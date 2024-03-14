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
    type: Sequelize.DOUBLE,
  },
  valor: {
    type: Sequelize.DOUBLE,
  },
  placa: {
    type: Sequelize.STRING,
  },
});

module.exports = Veiculos;
