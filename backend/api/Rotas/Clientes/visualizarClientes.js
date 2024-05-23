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

visualizarClientes.get("/cliente-cpf/:cpf", async (request, response) => {
  const { cpf } = request.params;
  try {
    const searchCpfCustomer = await tabelaClientes.findOne({
      where: {
        cpf: cpf,
      },
    });

    if (!searchCpfCustomer) {
      return response.status(400).json({ Error: "CPF não encontrado!!!" });
    } else {
      return response.status(200).send(searchCpfCustomer);
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Falha na busca de clientes por CPF" });
  }
});

visualizarClientes.get("/clientes/:id", async (request, response) => {
  try {
    const clienteUnico = await tabelaClientes.findByPk(request.params.id);

    if (clienteUnico) {
      return response.status(200).send(clienteUnico);
    } else {
      return response.status(400).json({ Error: "Cliente não existe" });
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Falha na busca de clientes por ID" });
  }
});

module.exports = visualizarClientes;
