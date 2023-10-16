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
const autenticacao = require("./Rotas/Usuarios/Autenticacao/autenticacaoUsuario.js");


//Rota Usuarios
app.use(criacaoUsuario);
app.use(autenticacao);



module.exports = app;   