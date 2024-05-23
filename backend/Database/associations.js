const Modelos = require("./Tabelas/Modelos/modelos");
const Marcas = require("./Tabelas/Marcas/marcas");
const Versoes = require("./Tabelas/Versoes/versoes");
const Veiculos = require("./Tabelas/Veiculos/veiculos");
const Acessorios = require("./Tabelas/Acessorios/acessorios");
const AcessoriosVeiculos = require("./Tabelas/Acessorios_veiculos/acessoriosVeiculos");
const Despesas = require("./Tabelas/Despesas/Despesas");
const DespesasVeiculos = require("./Tabelas/Despesas_veiculos/despesasVeiculos");
const Vendas = require("./Tabelas/Vendas/Vendas");
const Usuarios = require("./Tabelas/Usuarios/usuarios");
const Clientes = require("./Tabelas/Clientes/clientes");

Marcas.hasMany(Modelos, { foreignKey: "idMarca" }); // hasMany devido a uma marca poder pertencer a diversos modelos
Modelos.belongsTo(Marcas, { foreignKey: "idMarca" }); // belongsTo devido a um modelo pertencer a somente uma marca
Modelos.hasMany(Versoes, { foreignKey: "idModelo" }); //hasMany devido a um modelo pertencer a diversas versões
Versoes.belongsTo(Modelos, { foreignKey: "idModelo" }); // belongsTo devido a uma versão pertencer a somente um modelo
Marcas.hasMany(Versoes, { foreignKey: "idMarca" }); //hasMany devido a uma marca pertencer a diversas versões
Versoes.belongsTo(Marcas, { foreignKey: "idMarca" }); //belongsTo devido a uma versão pertencer a somente uma marca

Veiculos.belongsTo(Marcas, { foreignKey: "idMarca" }); // um veiculo possui somente uma marca
Veiculos.belongsTo(Modelos, { foreignKey: "idModelo" }); // um veiculo possui somente um modelo
Veiculos.belongsTo(Versoes, { foreignKey: "idVersao" }); // um veiculo possui somente uma versao

Marcas.hasMany(Veiculos, { foreignKey: "idMarca" }); // uma marca possui diversos veiculos
Modelos.hasMany(Veiculos, { foreignKey: "idModelo" }); // um modelo possui diversos veiculos
Versoes.hasMany(Veiculos, { foreignKey: "idVersao" }); // uma versão possui diversos veiculos

// Definindo a associação belongsToMany para Acessorios e Veiculos
// Definindo a associação entre Acessorios e Veiculos através de AcessoriosVeiculos
Acessorios.belongsToMany(Veiculos, {
  through: AcessoriosVeiculos,
  foreignKey: "idAcessorio",
});
Veiculos.belongsToMany(Acessorios, {
  through: AcessoriosVeiculos,
  foreignKey: "idVeiculo",
}); // through é usado para especificar a tabela intermediaria que gerencia o relacionamento muitos para muitos

//Definindo relacionamento muitos para muitos entre Despesas e Veiculos
Despesas.belongsToMany(Veiculos, {
  through: DespesasVeiculos,
  foreignKey: "idDespesa",
});

Veiculos.belongsToMany(Despesas, {
  through: DespesasVeiculos,
  foreignKey: "idVeiculo",
});

Usuarios.hasMany(Despesas, {
  foreignKey: "idUsuario",
  sourceKey: "id",
});

Despesas.belongsTo(Usuarios, {
  foreignKey: "idUsuario",
  targetKey: "id",
});

//Definindo relacionamento da tabela Vendas
Vendas.belongsTo(Veiculos, {
  foreignKey: "idVeiculo",
});
Veiculos.hasMany(Vendas, {
  foreignKey: "idVeiculo",
});

Vendas.belongsTo(Clientes, {
  foreignKey: "idCliente",
});

Clientes.hasMany(Vendas, {
  foreignKey: "idCliente",
});

Vendas.belongsTo(Usuarios, {
  foreignKey: "idUsuario",
});

Usuarios.hasMany(Vendas, {
  foreignKey: "idUsuario",
});
