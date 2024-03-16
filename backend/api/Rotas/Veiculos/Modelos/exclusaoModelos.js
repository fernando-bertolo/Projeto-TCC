const express = require("express");
const deletarModelos = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");

deletarModelos.delete("/deletar-modelos/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const modelo = await tabelaModelos.findOne({
      where: {
        idModelo: id,
      },
    });

    if (!modelo) {
      return response.status(400).json({ Error: "ID inválido" });
    }

    tabelaModelos.destroy({
      where: {
        idModelo: id,
      },
    });

    return response
      .status(200)
      .json({ message: "Modelo excluído com sucesso" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = deletarModelos;
