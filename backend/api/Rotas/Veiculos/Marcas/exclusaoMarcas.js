const express = require("express");
const deletarMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas");

deletarMarcas.delete("/deletar-marca/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const marca = await tabelaMarcas.findOne({
      where: {
        idMarca: id,
      },
    });
    if (!marca) {
      return response.status(400).json({ Error: "ID inválido!!" });
    }

    tabelaMarcas.destroy({
      where: {
        idMarca: id,
      },
    });

    return response
      .status(200)
      .json({ message: "Marca excluída com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = deletarMarcas;
