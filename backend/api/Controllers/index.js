const express = require("express");
const rotas = express();
const cors = require("cors");
rotas.use(express.json());
rotas.use(cors());



//Importando Usuario
const criacaoUsuario = require("../Rotas/Usuarios/criacaoUsuario.js");
const autenticacao = require("../Services/Autenticacao/autenticacaoUsuario.js");

//Importando Valida e-mail
const EsquecerSenha = require("../Services/EsquecerSenha/EsquecerSenhaUsuario.js");
const ResetarSenha = require("../Services/ResetarSenha/resetarSenha.js")


//Rota Usuarios
rotas.use(criacaoUsuario);
rotas.use(autenticacao);

//Rota Esquecer Senha
rotas.use(EsquecerSenha);
rotas.use(ResetarSenha);


module.exports = rotas;
