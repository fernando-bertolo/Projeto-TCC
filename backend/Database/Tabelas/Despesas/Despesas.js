const Sequelize = require("sequelize");
const database = require("../../database");

const Despesas = database.define("Despesas", {
  idDespesa: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  Data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idUsuario: {
    type: Sequelize.UUID,
    references: {
      model: "Usuarios",
      key: "id",
    },
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DECIMAL(10, 3), //  Permite até 10 dígitos no total, com 3 dígitos após o ponto decimal
  },
});

module.exports = Despesas;
