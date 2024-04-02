const express = require("express");
const alteracaoModelos = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");

alteracaoModelos.put("/alterar-modelo/:id", async (request, response) => {
  const { id } = request.params;
  const { nomeModelo } = request.body;
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
