// Este arquivo realiza o sincronismo das alterações do banco de dados

(async () => {
  const database = require("./database");
  const usuarios = require("./Tabelas/Usuarios/usuarios");
  const clientes = require("./Tabelas/Clientes/clientes");

  await database.sync();
})();
