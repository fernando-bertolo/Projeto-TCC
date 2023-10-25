const express = require("express");
const alterarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const crypto = require("crypto");
const { where } = require("sequelize");


alterarSenha.post("/esquecer-senha", async (request, response) => {
    const {email} = request.body;
    try{

        const usuario = await tabelaUsuario.findOne({
            where: {
                email: email
            }
        })
    
        if(!usuario){
            return response.status(400).json({message: "E-mail não encontrado, por favor digite um e-mail válido!!"})
            
        }


        const tokenEmail = crypto.randomBytes(20).toString("hex"); // Gera token do e-mail de 20 caracteres

        const horaAtual = new Date();
        horaAtual.setHours(horaAtual.getHours() + 1);

        await tabelaUsuario.update(
            {
                '$set': {
                    senhaResetaToken: tokenEmail,
                    tokenExpiracao: horaAtual,
                }
            },
            {where: {id: request.params.id}}    
        );
        console.log(tokenEmail, horaAtual)

    } catch(error){
        console.log(error)
        response.status(400).send({error: "ERRO"})
    }
});

module.exports = alterarSenha;