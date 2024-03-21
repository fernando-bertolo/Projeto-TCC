const express = require("express");
const deletarVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");

deletarVersao.delete("/deletar-versao/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const versao = await tabelaVersao.findOne({
      where: {
        idVersao: id,
      },
    });

    if (!versao) {
      return response.status(400).json({ Error: "ID inválido" });
    } else {
      tabelaVersao.destroy({
        where: {
          idVersao: id,
        },
      });

      return response
        .status(200)
        .json({ message: "Versão excluída com sucesso!!" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = deletarVersao;
