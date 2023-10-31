const express = require("express");
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const autenticacao = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

autenticacao.post("/", async (request, response) => { // Utilizamos uma funcão assincrona com async e o await para os metodos que nao devem ser passados para frente enquanto não terminar a execução
    const {usuario, senha} = request.body;
    try {
        const user = await tabelaUsuarios.findOne({
            where: {
                usuario: usuario // valor da esquerda é o valor da tabela no mysql e o da direita o da requisição no insomnia por exemplo
            },
        });
    
        if(!user){
            return response.status(401).json({message: "Usuário ou senha incorreto"});
        }
    
        const validaSenha = await bcrypt.compare(senha, user.senha); // passando o hash da senha que foi criado no createUser.js e comparando com o do banco
     
        if (!validaSenha) {
            return response.status(401).json({message: "Usuário ou senha incorreto"});
        }
    
        const token = jwt.sign({id: tabelaUsuarios.id}, "your_jwt_secret", {
            expiresIn: "1hr",
        });
    
        response.send({
            token: token,
        });
    } catch (error) {
        console.log(error);
        return response.status(400).send({Error: "Erro na autenticação, tente novamente!"})
    }
});

module.exports = autenticacao;