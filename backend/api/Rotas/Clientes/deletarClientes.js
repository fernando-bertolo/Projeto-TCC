const express = require("express");
const deletarClientes = express();
const tabelaClientes = require("../../../Database/Tabelas/Clientes/clientes");
const tabelaVendas = require("../../../Database/Tabelas/Vendas/Vendas");

deletarClientes.delete("/deletar-cliente/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const idCliente = await tabelaClientes.findOne({
      where: {
        id: id,
      },
    });

    const idClienteVendas = await tabelaVendas.findOne({
      where: {
        idCliente: id,
      },
    });

    if (idClienteVendas) {
      return response
        .status(400)
        .json({
          Error:
            "Cliente não pode ser excluído devido a estar vinculado a uma venda!!",
        });
    }

    if (idCliente) {
      tabelaClientes.destroy({
        where: {
          id: id,
        },
      });

      return response
        .status(200)
        .json({ message: "cliente excluído com sucesso" });
    } else {
      return response
        .status(400)
        .json({ Error: "Não foi possível excluir o cliente" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = deletarClientes;
