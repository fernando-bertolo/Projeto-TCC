const express = require("express");
const alterarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");


alterarSenha.post("/esquecer-senha", async (request, response) => {
    const {email} = request.body;
    const validaEmail = await tabelaUsuario.findOne({
        where: {
            email: email
        }
    })

    return response.status(200).send("Deu certo");
});

module.exports = alterarSenha;