const express = require("express");
const visualizarClientes = express();
const tabelaClientes = require("../../../Database/Tabelas/Clientes/clientes");

visualizarClientes.get("/clientes", async (request, response) => {
  try {
    const visualizaClientes = await tabelaClientes.findAll();
    response.send(visualizaClientes);
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarClientes;
