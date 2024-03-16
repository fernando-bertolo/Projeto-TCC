const express = require("express");
const deletarMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas");
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos");
const tabelaVersoes = require("../../../../Database/Tabelas/Versoes/versoes");

deletarMarcas.delete("/deletar-marca/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const modelos = await tabelaModelos.findAll({
      where: {
        idMarca: id,
      },
    });

    if (modelos.length > 0) {
      for (const modelo of modelos) {
        console.log(modelo.id);
        const versoes = await tabelaVersoes.findAll({
          where: {
            idModelo: modelo.id,
          },
        });

        if (versoes.length > 0) {
          return response.status(400).json({
            Error:
              "Não é possível excluir uma marca que possui modelos e versões associados!!",
          });
        }
      }
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
