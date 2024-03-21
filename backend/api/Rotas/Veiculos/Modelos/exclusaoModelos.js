const express = require("express");
const deletarModelos = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");

deletarModelos.delete("/deletar-modelos/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const modeloVersao = await tabelaVersao.findOne({
      where: {
        idModelo: id,
      },
    });

    const modelo = await tabelaModelos.findOne({
      where: {
        idModelo: id,
      },
    });

    if (modeloVersao) {
      return response.status(400).json({
        Error: "Não é possível excluir um modelo que possui versão associada!!",
      });
    }

    if (!modelo) {
      return response
        .status(400)
        .json({ Error: "ID passado por parâmetro como inválido!!" });
    }

    tabelaModelos.destroy({
      where: {
        idModelo: id,
      },
    });

    return response
      .status(200)
      .json({ message: "Modelo excluído com sucesso" });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Erro ao tentar excluir o modelo!!" });
  }
});

module.exports = deletarModelos;
