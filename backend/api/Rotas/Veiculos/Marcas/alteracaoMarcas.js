const express = require("express");
const alteracaoMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas.js");
const { Op } = require("sequelize");

alteracaoMarcas.put("/alteracao-marcas/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { nomeMarca } = request.body;

    const marca = await tabelaMarcas.findOne({
      where: {
        nomeMarca: nomeMarca,
      },
    });

    const marcaID = await tabelaMarcas.findOne({
      where: {
        idMarca: id,
      },
    });

    if (!marcaID) {
      return response.status(400).json({ Error: "ID inválido" });
    }

    if (marca) {
      return response
        .status(400)
        .json({ Error: "Marca já cadastrada no sistema" });
    }

    tabelaMarcas.update(
      {
        nomeMarca: nomeMarca,
      },
      { where: { idMarca: request.params.id } }
    );

    return response
      .status(200)
      .json({ message: "Marca alterada com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = alteracaoMarcas;
