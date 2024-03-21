const express = require("express");
const deletarMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas");
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos");
const tabelaVersoes = require("../../../../Database/Tabelas/Versoes/versoes");

deletarMarcas.delete("/deletar-marca/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const marcaModelo = await tabelaModelos.findOne({
      where: {
        idMarca: id, // Procura marca na tabela modelo
      },
    });

    const marcaVersao = await tabelaVersoes.findOne({
      where: {
        idMarca: id, // Procura marca na tabela versão
      },
    });

    if (marcaModelo || marcaVersao) {
      return response.status(400).json({
        Error:
          "Não é possível excluir uma marca que possui modelo ou versão associados!!",
      });
    }

    const marca = await tabelaMarcas.findOne({
      where: {
        idMarca: id,
      },
    });

    if (!marca) {
      return response.status(400).json({ Error: "ID inválido!!" });
    }

    tabelaMarcas.destroy({
      where: {
        idMarca: id,
      },
    });

    return response
      .status(200)
      .json({ message: "Marca excluída com sucesso!!" });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Erro ao tentar excluir a marca!" });
  }
});

module.exports = deletarMarcas;
