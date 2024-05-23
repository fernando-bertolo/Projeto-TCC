const express = require("express");
const deletarVendas = express();
const tabelaVendas = require("../../../Database/Tabelas/Vendas/Vendas.js");

deletarVendas.delete("/deletar-venda/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const registroVenda = await tabelaVendas.findOne({
      idVenda: id,
    });

    if (!registroVenda) {
      return response.status(400).json({ Error: "ID inválido!!" });
    } else {
      tabelaVendas.destroy({
        where: {
          idVenda: id,
        },
      });

      return response
        .status(200)
        .json({ message: "Venda excluída com sucesso!!" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ Error: "Falha na exclusão da venda!!" });
  }
});

module.exports = deletarVendas;
