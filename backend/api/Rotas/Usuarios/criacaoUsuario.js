const express = require("express");
const criacaoUsuario = express();
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10; // saltRounds é a quantidade de vezes que o algoritmo é executado

criacaoUsuario.post("/criacao-usuario", (request, response) => {
    try{
        const hash = bcrypt.hashSync(request.body.senha, saltRounds)

        //Objeto usuario com a senha hasheada
        const usuario = {
            ...request.body, // o "...request.body" estamos pegando o que já tem na requisição e alterando somente um valor, no caso senha passado no objeto
            senha: hash
        }
        tabelaUsuarios.create(usuario);
        response.send("Usuario criado com sucesso");
    } catch(error){
        console.log(error);
    }
})

module.exports = criacaoUsuario;