const express = require("express");
const alteracaoModelos = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas.js");

alteracaoModelos.put("/alterar-modelo/:id", async (request, response) => {
  const { id } = request.params;
  const { idMarca, nomeModelo } = request.body;
  try {
    const idModelo = await tabelaModelos.findOne({
      where: {
        idModelo: id,
      },
    });

    const modelo = await tabelaModelos.findOne({
      where: {
        nomeModelo: nomeModelo,
      },
    });

    const marcaID = await tabelaMarcas.findOne({
      where: {
        idMarca: idMarca,
      },
    });

    if (!marcaID) {
      return response.status(400).json({ Error: "ID da marca inválido!!" });
    }

    if (!idModelo) {
      return response.status(400).json({ Error: "ID inválido" });
    }

    if (modelo) {
      return response
        .status(400)
        .json({ Error: "Modelo já existente no sistema!!" });
    }

    tabelaModelos.update(
      {
        idMarca: idMarca,
        nomeModelo: nomeModelo,
      },
      { where: { idModelo: id } }
    );

    return response
      .status(200)
      .json({ messagem: "Modelo alterado com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = alteracaoModelos;
