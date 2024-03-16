const express = require("express");
const rotas = express();
const cors = require("cors");
rotas.use(express.json());
rotas.use(cors());

//Importando Usuario
const criacaoUsuario = require("../Rotas/Usuarios/criacaoUsuario.js");
const autenticacao = require("../Services/Autenticacao/autenticacaoUsuario.js");
const visualizarUsuario = require("../Rotas/Usuarios/visualizarUsuario.js");
const alteracaoUsuario = require("../Rotas/Usuarios/alteracaoUsuario.js");
const exclusaoUsuario = require("../Rotas/Usuarios/exclusaoUsuario.js");

//Importando Clientes
const criacaoClientes = require("../Rotas/Clientes/criacaoClientes.js");
const visualizarClientes = require("../Rotas/Clientes/visualizarClientes.js");
const alteracaoClientes = require("../Rotas/Clientes/alteracaoClientes.js");
const exclusaoClientes = require("../Rotas/Clientes/deletarClientes.js");

//Importando Valida e-mail
const EsquecerSenha = require("../Services/EsquecerSenha/EsquecerSenhaUsuario.js");
const ResetarSenha = require("../Services/ResetarSenha/resetarSenha.js");

// Importando Marcas
const criacaoMarcas = require("../Rotas/Veiculos/Marcas/criacaoMarcas.js");
const visualizarMarcas = require("../Rotas/Veiculos/Marcas/visualizarMarcas.js");
const alteracaoMarcas = require("../Rotas/Veiculos/Marcas/alteracaoMarcas.js");
const deletarMarcas = require("../Rotas/Veiculos/Marcas/exclusaoMarcas.js");

// Importando Modelos
const criacaoModelo = require("../Rotas/Veiculos/Modelos/criacaoModelo.js");
const visualizarModelos = require("../Rotas/Veiculos/Modelos/visualizarModelos.js");
const alteracaoModelos = require("../Rotas/Veiculos/Modelos/alteracaoModelo.js");
const deletarModelos = require("../Rotas/Veiculos/Modelos/exclusaoModelos.js");

// Importanto Versões
const criacaoVersao = require("../Rotas/Veiculos/Versoes/criacaoVersao.js");
const visualizarVersao = require("../Rotas/Veiculos/Versoes/visualizarVersao.js");
const alteracaoVersao = require("../Rotas/Veiculos/Versoes/alteracaoVersao.js");
const deletarVersao = require("../Rotas/Veiculos/Versoes/exclusaoVersao.js");

//Rota Usuarios
rotas.use(criacaoUsuario);
rotas.use(autenticacao);
rotas.use(visualizarUsuario);
rotas.use(alteracaoUsuario);
rotas.use(exclusaoUsuario);

//Rota Esquecer Senha
rotas.use(EsquecerSenha);
rotas.use(ResetarSenha);

//Rota Clientes
rotas.use(criacaoClientes);
rotas.use(visualizarClientes);
rotas.use(alteracaoClientes);
rotas.use(exclusaoClientes);

//Rota de Marcas
rotas.use(criacaoMarcas);
rotas.use(visualizarMarcas);
rotas.use(alteracaoMarcas);
rotas.use(deletarMarcas);

//Rota de Modelos
rotas.use(criacaoModelo);
rotas.use(visualizarModelos);
rotas.use(alteracaoModelos);
rotas.use(deletarModelos);

//Rota de Versões
rotas.use(criacaoVersao);
rotas.use(visualizarVersao);
rotas.use(alteracaoVersao);
rotas.use(deletarVersao);

module.exports = rotas;
