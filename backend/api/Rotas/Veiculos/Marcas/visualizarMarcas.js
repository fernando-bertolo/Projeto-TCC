const express = require("express");
const visualizarMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas");

// Rota get para todas as marcas

visualizarMarcas.get("/visualizar-marcas", async (request, response) => {
  try {
    const visualizaMarcas = await tabelaMarcas.findAll();

    response.send(visualizaMarcas);
  } catch (error) {
    console.log(error);
  }
});

// Rota get para marcas específicas

visualizarMarcas.get("/visualizar-marcas/:id", async (request, response) => {
  try {
    const visualizaMarcaEspecifica = await tabelaMarcas.findByPk(
      request.params.id
    );

    if (!visualizaMarcaEspecifica) {
      return response.status(400).json({ Error: "Marca não existe!!" });
    } else {
      response.send(visualizaMarcaEspecifica);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarMarcas;
