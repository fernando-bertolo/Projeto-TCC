const express = require("express");
const deleteUsuario = express();
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");

deleteUsuario.delete("/deletar-usuario/:id", async (request, response) => {
  const { id } = request.params;

  try {
    if (id) {
      tabelaUsuarios.destroy({
        where: {
          id: id,
        },
      });
      return response
        .status(200)
        .json({ message: "Usuário excluído com sucesso!!" });
    } else {
      return response
        .status(400)
        .json({ Error: "Ocorreu um erro ao excluir o usuário" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = deleteUsuario;
