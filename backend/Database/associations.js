const Modelos = require("./Tabelas/Modelos/modelos");
const Marcas = require("./Tabelas/Marcas/marcas");
const Versoes = require("./Tabelas/Versoes/versoes");
const Veiculos = require("./Tabelas/Veiculos/veiculos");
const Acessorios = require("./Tabelas/Acessorios/acessorios");
const AcessoriosVeiculos = require("./Tabelas/Acessorios_veiculos/acessoriosVeiculos");

Marcas.hasMany(Modelos, { foreignKey: "idMarca" }); // hasMany devido a uma marca poder pertencer a diversos modelos
Modelos.belongsTo(Marcas, { foreignKey: "idMarca" }); // belongsTo devido a um modelo pertencer a somente uma marca
Modelos.hasMany(Versoes, { foreignKey: "idModelo" }); //hasMany devido a um modelo pertencer a diversas versões
Versoes.belongsTo(Modelos, { foreignKey: "idModelo" }); // belongsTo devido a uma versão pertencer a somente um modelo

Veiculos.belongsTo(Marcas, { foreignKey: "idMarca" }); // um veiculo possui somente uma marca
Veiculos.belongsTo(Modelos, { foreignKey: "idModelo" }); // um veiculo possui somente um modelo
Veiculos.belongsTo(Versoes, { foreignKey: "idVersao" }); // um veiculo possui somente uma versao

Marcas.hasMany(Veiculos, { foreignKey: "idMarca" }); // uma marca possui diversos veiculos
Modelos.hasMany(Veiculos, { foreignKey: "idModelo" }); // um modelo possui diversos veiculos
Versoes.hasMany(Veiculos, { foreignKey: "idVersao" }); // uma versão possui diversos veiculos

// Definindo a associação belongsToMany para Acessorios e Veiculos
Acessorios.belongsToMany(Veiculos, { through: "AcessoriosVeiculos" }); // through é usado para especificar a tabela intermediaria que gerencia o relacionamento muitos para muitos
Veiculos.belongsToMany(Acessorios, { through: "AcessoriosVeiculos" });
