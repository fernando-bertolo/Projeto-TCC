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

visualizarClientes.get("/clientes/:id", async (request, response) => {
  try {
    const clienteUnico = await tabelaClientes.findByPk(request.params.id);

    if (clienteUnico) {
      return response.status(200).send(clienteUnico);
    } else {
      return response.status(400).json({ Error: "Usuário não existe" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarClientes;
