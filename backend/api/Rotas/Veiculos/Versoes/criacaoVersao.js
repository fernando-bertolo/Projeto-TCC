const express = require("express");
const criacaoVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");

criacaoVersao.post("/criacao-versao", async (request, response) => {
  const { idMarca, idModelo, nomeVersao } = request.body;
  try {
    const versao = await tabelaVersao.findOne({
      where: {
        nomeVersao: nomeVersao,
      },
    });

    if (versao) {
      return response.status(400).json({ Error: "Versão já existe!!" });
    }

    tabelaVersao.create({
      idMarca: idMarca,
      idModelo: idModelo,
      nomeVersao: nomeVersao,
    });

    return response
      .status(200)
      .json({ message: "Versão criada com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = criacaoVersao;
