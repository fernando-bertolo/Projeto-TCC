const express = require("express");
const visualizarUsuario = express();
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");


visualizarUsuario.get("/usuarios", async (request, response) => {
    try {
        const visualizaUsuarios = await tabelaUsuarios.findAll();
        response.send(visualizaUsuarios); // Envia as informações do banco para o frontend
    } catch (error) {
        console.log(error);
    }
});


visualizarUsuario.get("/usuarios/:id", async (request, response) => {
    try {
        const UsuarioUnico = await tabelaUsuarios.findByPk(request.params.id);

        if(UsuarioUnico){
            response.send(UsuarioUnico);
        } else{
            response.send({Error: "Usuário não existe"});
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = visualizarUsuario;