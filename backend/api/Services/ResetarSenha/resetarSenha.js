const express = require("express");
const resetarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;



resetarSenha.post("/resetar-senha/:tokenSenha", async (request, response) => {
    const {senha, confirmaSenha} = request.body; // O confirmaSenha esta pegando apenas do input no front
    const {tokenSenha} = request.params;

    try {

        const usuario = await tabelaUsuario.findOne({
            where: {
                tokenSenha: tokenSenha
            }
        })

        if(!usuario){
            return response.status(400).send({error: "Token inválido"})
        }

        //if(senha !== confirmaSenha){
        //    return response.status(400).send({error: "Senhas diferentes"})
        //}

        const horaAtual = new Date();

        console.log(usuario.horaExpiracaoToken);
        if(horaAtual > usuario.horaExpiracaoToken){
            return response.status(400).send({error: "Token expirado"})
        }

    
        const hashSenha = bcrypt.hashSync(request.body.senha, saltRounds);


        await tabelaUsuario.update({
            senha: hashSenha,
        },
        {where: {tokenSenha: request.params.tokenSenha}})

        response.send({message: "Senha alterada com sucesso!!"});

        
    } catch (error) {
        console.log(error);
        return response.status(400).send({ error: "Não foi possível resetar a senha, tente novamente!"})
    }
})

module.exports = resetarSenha;