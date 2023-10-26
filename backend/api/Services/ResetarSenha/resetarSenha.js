const express = require("express");
const resetarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");



resetarSenha.post("resetar-senha", async (request, response) => {
    const {email, tokenEmail, senha} = request.body;

    try {

        const usuario = await tabelaUsuario.findOne({
            where: {
                email: email,
                senhaResetaToken: senhaResetaToken,
                tokenExpiracao: tokenExpiracao,
            }
        })

        if(!usuario){
            return response.status(400).send({ error: "Usuário não existe"})
        }

        if(tokenEmail !== usuario.senhaResetaToken){
            return response.status(400).send({error: "Token inválido"})
        }


        const horaAtual = new Date();

        if(horaAtual > usuario.tokenExpiracao){
            return response.status(400).send({error: "Token expirado"})
        }

        usuario.senha = senha;
        await usuario.save();
        response.send();

        
    } catch (error) {
        return response.status(400).send({ error: "Não foi possível resetar a senha, tente novamente!"})
    }
})

module.exports = resetarSenha;