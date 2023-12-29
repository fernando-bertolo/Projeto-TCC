const express = require("express");
const criacaoUsuario = express();
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10; // saltRounds é a quantidade de vezes que o algoritmo é executado

criacaoUsuario.post("/criacao-usuario", async (request, response) => {

    const {nome, email, usuario, senha, confirmaSenha} = request.body;
    
    try{

        const validaUsuario = await tabelaUsuarios.findOne({
            where: {
                usuario: usuario, //Consulta no banco se já existe um usuário igual o passado na requisição
            }
        })

        const validaEmail = await tabelaUsuarios.findOne({
            where: {
                email: email //Consulta no banco se já existe um email igual o passado na requisição
            }
        })

        response.send({
            usuario: usuario,
            email: email
        })

        // Validação de usuário e validação de e-mail  
        if(validaUsuario){
            return response.status(400).json({Error: "Usuário já existe"})
        } else if(validaEmail){
            return response.status(400).json({Error: "E-mail já cadastrado no sistema"})
        }


        if(senha === "" && confirmaSenha === ""){
            return response.status(400).json({Error: "Os campos das senhas devem ser preenchidos"})
        } else if (senha !== confirmaSenha){
            return response.status(400).json({Error: "As senhas estão diferentes"})
        } else if(senha.length < 5 && confirmaSenha.length < 5){
            return response.status(400).json({Error: "A senha deverá ter no mínimo 5 caracteres"})
        } else{

        //Realizando o hash da senha
        const hashSenha = bcrypt.hashSync(request.body.senha, saltRounds);

        tabelaUsuarios.create({
            nome: nome,
            email: email,
            usuario: usuario,
            senha: hashSenha,
        });

        return response.status(200).json({message: "Usuario criado com sucesso"});

        }

    } catch(error){
        console.log(error);
    }
})


criacaoUsuario.get("/criacao-usuario",  async (request, response) => {

})

module.exports = criacaoUsuario;