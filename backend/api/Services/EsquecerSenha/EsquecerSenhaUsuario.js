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

    if(!validaEmail){
        return response.status(401).json({message: "E-mail não encontrado"})
    }else{
        return response.status(200).json({message: "Sucesso"})
    }
});

module.exports = alterarSenha;