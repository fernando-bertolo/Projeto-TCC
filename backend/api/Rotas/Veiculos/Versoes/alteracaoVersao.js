const express = require("express");
const alteracaoVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");
const tabelaModelo = require("../../../../Database/Tabelas/Modelos/modelos.js");
const { Op } = require("sequelize");

alteracaoVersao.put("/alterar-versao/:id", async (request, response) => {
  const { id } = request.params;
  const { nomeVersao, idModelo } = request.body;
  try {
    const versaoID = await tabelaVersao.findOne({
      where: {
        idVersao: id,
      },
    });

    const modeloID = await tabelaModelo.findOne({
      where: {
        idModelo: idModelo,
      },
    });

    const versao = await tabelaVersao.findOne({
      where: {
        idVersao: { [Op.ne]: id },
        nomeVersao: nomeVersao,
      },
    });

    if (!versaoID) {
      return response.status(400).json({ Error: "ID inválido!!" });
    }

    if (!modeloID) {
      return response
        .status(400)
        .json({ Error: "Selecione corretamente o campo Modelos!!" });
    }

    if (versao) {
      return response
        .status(400)
        .json({ Error: "Versão já existe no sistema!!" });
    }

    tabelaVersao.update(
      {
        nomeVersao: nomeVersao,
        idModelo: idModelo,
      },
      { where: { idVersao: id } }
    );

    return response
      .status(200)
      .json({ message: "Versão alterada com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = alteracaoVersao;
