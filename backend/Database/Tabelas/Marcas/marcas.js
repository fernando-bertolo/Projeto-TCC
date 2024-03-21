const Sequelize = require("sequelize");
const database = require("../../database");

const Marcas = database.define("Marcas", {
  idMarca: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nomeMarca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Marcas;
