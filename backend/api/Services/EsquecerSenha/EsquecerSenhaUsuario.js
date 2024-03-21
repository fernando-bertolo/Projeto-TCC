const express = require("express");
const alterarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const crypto = require("crypto");
const { where, DATE } = require("sequelize");
const mail = require("../Email/mail.js");


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
                tokenSenha: tokenEmail, // Armazena o hash criado na variavel tokenEmail no campo tokenSenha do banco
                horaExpiracaoToken: horaAtual, //Armazena a horaAtual no campo horaExpiracaoToken no banco
            },
            {where: {email: email}} // Só faz o update quando o valor do campo email no banco for o mesmo do campo email da requisição
        );

        //Envia e-mail
        mail.sendMail({
            to: email,
            from: "fernando.bertolo03@icloud.com",
            subject: "Esqueceu sua senha?",
            text: `Você solicitou a alteração de senha. Segue o link para resetar a senha: http://localhost:3000/resetar-senha/${tokenEmail}`,

        }, (error) =>{
            if(error){
                return response.status(400).send({error: "Falha ao enviar e-mail de alteração de senha"})
            }
        });

        response.status(200).send({message: "Sucesso ao enviar o e-mail"})

    } catch(error){
        console.log(error)
        response.status(400).send({error: "ERRO"})
    }
});


module.exports = alterarSenha;