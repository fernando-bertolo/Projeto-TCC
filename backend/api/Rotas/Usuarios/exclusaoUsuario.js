const express = require("express");
const deleteUsuario = express();
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");

deleteUsuario.delete("/deletar-usuario/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const idUsuario = await tabelaUsuarios.findOne({
      where: {
        id: id,
      },
    });
    if (idUsuario) {
      tabelaUsuarios.destroy({
        where: {
          id: id,
        },
      });
      return response
        .status(200)
        .json({ message: "Usuário excluído com sucesso!!" });
    } else {
      return response.status(400).json({ Error: "Usuário não existe" });
    }
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .json({ Error: "Não foi possível excluir o usuário" });
  }
});

module.exports = deleteUsuario;
