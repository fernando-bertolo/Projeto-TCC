const express = require("express");
const resetarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;



resetarSenha.post("/resetar-senha/:tokenSenha", async (request, response) => {
    const {email, senha} = request.body;

    try {

        const usuario = await tabelaUsuario.findOne({
            where: {
                email: email,
                senha: senha
            }
        })

        if(!usuario.email){
            return response.status(400).send({ error: "Usuário não existe"})
        }

        if(tokenSenha !== usuario.tokenSenha){
            return response.status(400).send({error: "Token inválido"})
        }


        const horaAtual = new Date();

        if(horaAtual > usuario.horaExpiracaoToken){
            return response.status(400).send({error: "Token expirado"})
        }

    

        const hashSenha = bcrypt.hashSync(request.body.senha, saltRounds);

        const user = {
            ...request.body,
            senha: hashSenha
        }


        usuario.senha = user.senha;
        await usuario.save();
        response.send({message: "Senha alterada com sucesso!!"});

        
    } catch (error) {
        console.log(error);
        return response.status(400).send({ error: "Não foi possível resetar a senha, tente novamente!"})
    }
})

module.exports = resetarSenha;