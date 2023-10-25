const express = require("express");
const alterarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const crypto = require("crypto");


alterarSenha.post("/esquecer-senha", async (request, response) => {
    const {email} = request.body;
    try{

        const validaEmail = await tabelaUsuario.findOne({
            where: {
                email: email
            }
        })
    
        if(!validaEmail){
            return response.status(401).json({message: "E-mail não encontrado, por favor digite um e-mail válido!!"})
        }else{
            return response.status(200).json({message: "Sucesso"})
        }

        const tokenEmail = crypto.randomBytes(20).toString("hex"); // Gera token do e-mail de 20 caracteres

        const horaAtual = new Date();
        horaAtual.setHours(horaAtual.getHours() + 1)


    } catch(err){
        response.status(400).send({error: "ERRO"})
    }
});

module.exports = alterarSenha;