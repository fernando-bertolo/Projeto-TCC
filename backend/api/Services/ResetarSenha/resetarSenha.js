const express = require("express");
const resetarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;



resetarSenha.post("/resetar-senha/:tokenSenha", async (request, response) => {
    const {tokenSenha} = request.params;
    const {senha, confirmaSenha} = request.body; // O confirmaSenha esta pegando o input no body

    try {

        const usuario = await tabelaUsuario.findOne({
            where: {
                tokenSenha: tokenSenha // Procura no banco quando tokenSenha da requisição for igual ao tokenSenha do banco
            }
        })

        //Se a variavel usuario não for true entra no IF
        if(!usuario){
            return response.status(400).send({error: "Token inválido"})
        }

        if(senha === "" && confirmaSenha === ""){
            return response.status(400).send({error: "O campo de senha deve ser preenchido"});

        } else if(senha !== confirmaSenha){
            return response.status(400).send({error: "Senhas diferentes!"});

        } else if(senha.length < 5 && confirmaSenha.length < 5){
            return response.status(400).send({error: "A senha deverá ter no mínimo 5 caracteres"});
        } else{
            
            //Pega a hora atual
            const horaAtual = new Date();

            if(horaAtual > usuario.horaExpiracaoToken){
                return response.status(400).send({error: "Token expirado"})
            }

        
            //Realizando o hash da senha novamente
            const hashSenha = bcrypt.hashSync(request.body.senha, saltRounds);


            await tabelaUsuario.update({
                senha: hashSenha, //Altera o campo senha no banco com o hashSenha
            },
            {where: {tokenSenha: request.params.tokenSenha}}) // Realiza a alteração somente quando o tokenSenha no banco for igual ao tokenSenha da requisição

            response.send({message: "Senha alterada com sucesso!!"});
            }
        
    } catch (error) {
        console.log(error);
        return response.status(400).send({ error: "Não foi possível resetar a senha, tente novamente!"})
    }
})

module.exports = resetarSenha;