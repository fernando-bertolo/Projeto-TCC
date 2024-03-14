// Este arquivo realiza o sincronismo das alterações do banco de dados

(async () => {
  const database = require("./database");
  const usuarios = require("./Tabelas/Usuarios/usuarios");
  const clientes = require("./Tabelas/Clientes/clientes");
  const Marcas = require("./Tabelas/Marcas/marcas");
  const Modelos = require("./Tabelas/Modelos/modelos");
  const Versoes = require("./Tabelas/Versoes/versoes");
  const Veiculos = require("./Tabelas/Veiculos/veiculos");
  const Acessorios = require("./Tabelas/Acessorios/acessorios");
  const AcessoriosVeiculos = require("./Tabelas/Acessorios_veiculos/acessoriosVeiculos");

  await database.sync();
})();
