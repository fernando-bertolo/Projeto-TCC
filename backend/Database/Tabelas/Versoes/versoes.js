const Sequelize = require("sequelize");
const database = require("../../database");

const Versoes = database.define("Versoes", {
  idVersao: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  idMarca: {
    type: Sequelize.UUID,
    references: {
      model: "Marcas", // Nome do modelo que está sendo referenciado
      key: "idMarca", // Nome da chave estrangeira no modelo referenciado
    },
  },
  idModelo: {
    type: Sequelize.UUID,
    references: {
      model: "Modelos", // Nome do modelo que está sendo referenciado
      key: "idModelo", // Nome da chave estrangeira no modelo referenciado
    },
  },
  nomeVersao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Versoes;
