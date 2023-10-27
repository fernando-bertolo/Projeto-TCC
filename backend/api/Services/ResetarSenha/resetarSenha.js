const express = require("express");
const resetarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;



resetarSenha.post("/resetar-senha", async (request, response) => {
    const {email, senha,  tokenSenha} = request.body;

    try {

        const usuario = await tabelaUsuario.findOne({
            where: {
                email: email,
                tokenSenha: tokenSenha,
            }
        })

        if(!usuario){
            return response.status(400).send({ error: "Usuário não existe"})
        }

        if(tokenSenha !== usuario.tokenSenha){
            return response.status(400).send({error: "Token inválido"})
        }


        const horaAtual = new Date();

        if(horaAtual > usuario.horaExpiracaoToken){
            return response.status(400).send({error: "Token expirado"})
        }

    

        const hash = bcrypt.hashSync(request.body.senha, saltRounds);

        const user = {
            ...request.body,
            senha: hash
        }


        usuario.senha = user.senha;
        await usuario.save();
        response.send();

        
    } catch (error) {
        console.log(error);
        return response.status(400).send({ error: "Não foi possível resetar a senha, tente novamente!"})
    }
})

module.exports = resetarSenha;