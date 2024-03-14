const Sequelize = require("sequelize");
const database = require("../../database");

const Acessorios = database.define("Acessorios", {
  idAcessorio: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nomeAcessorio: {
    type: Sequelize.STRING,
  },
});

module.exports = Acessorios;
