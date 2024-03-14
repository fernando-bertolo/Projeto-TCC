const express = require("express");
const visualizarMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas");

visualizarMarcas.get("/visualizar-marcas", async (request, response) => {
  try {
    const visualizaMarcas = await tabelaMarcas.findAll();

    response.send(visualizaMarcas);
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarMarcas;
