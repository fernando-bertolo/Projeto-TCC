const Sequelize = require("sequelize");
const database = require("../../database");
const Marcas = require("../Marcas/marcas");

const Modelos = database.define("Modelos", {
  idModelo: {
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
  nomeModelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Modelos;
