const express = require("express");
const visualizarModelos = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");

//Rota get para visualizar todos os modelos

visualizarModelos.get("/visualizar-modelos", async (request, response) => {
  try {
    const visualizaModelos = await tabelaModelos.findAll();

    response.send(visualizaModelos);
  } catch (error) {
    console.log(error);
  }
});

//Rota get para visualizar modelos específicos

visualizarModelos.get("/visualizar-modelos/:id", async (request, response) => {
  try {
    const visualizaModeloEspecifico = await tabelaModelos.findByPk(
      request.params.id
    );

    if (!visualizaModeloEspecifico) {
      return response.status(400).json({ Error: "Modelo não existe!!" });
    } else {
      response.send(visualizaModeloEspecifico);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarModelos;
