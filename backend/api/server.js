const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const port = 3010;
app.listen(port);

app.get("/", (req,res) => {
    console.log("API Funcionando na porta 3010");
    res.send("API funcionando na porta 3010")
})


//Importando Usuario
const criacaoUsuario = require("./Rotas/Usuarios/criacaoUsuario.js");
const autenticacao = require("./Services/Autenticacao/autenticacaoUsuario.js");

//Importando Valida e-mail
const EsquecerSenha = require("./Services/EsquecerSenha/EsquecerSenhaUsuario.js");


//Rota Usuarios
app.use(criacaoUsuario);
app.use(autenticacao);

//Rota Esquecer Senha
app.use(EsquecerSenha);





module.exports = app;   