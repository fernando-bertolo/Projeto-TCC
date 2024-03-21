const express = require("express");
const alteracaoVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");

alteracaoVersao.put("/alterar-versao/:id", async (request, response) => {
  const { id } = request.params;
  const { nomeVersao } = request.body;
  try {
    const versaoID = await tabelaVersao.findOne({
      where: {
        idVersao: id,
      },
    });

    const versao = await tabelaVersao.findOne({
      where: {
        nomeVersao: nomeVersao,
      },
    });

    if (!versaoID) {
      return response.status(400).json({ Error: "ID inválido!!" });
    }

    if (versao) {
      return response
        .status(400)
        .json({ Error: "Versão já existe no sistem!!" });
    }

    tabelaVersao.update(
      {
        nomeVersao: nomeVersao,
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
