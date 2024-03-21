const express = require("express");
const criacaoVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");
const tabelaModelo = require("../../../../Database/Tabelas/Modelos/modelos.js");
const tabelaMarca = require("../../../../Database/Tabelas/Marcas/marcas.js");

criacaoVersao.post("/criacao-versao", async (request, response) => {
  const { idMarca, idModelo, nomeVersao } = request.body;
  try {
    const marca = await tabelaMarca.findOne({
      where: {
        idMarca: idMarca,
      },
    });

    const modelo = await tabelaModelo.findOne({
      where: {
        idModelo: idModelo,
      },
    });

    const versao = await tabelaVersao.findOne({
      where: {
        nomeVersao: nomeVersao,
      },
    });

    if (!marca) {
      return response.status(200).json({ Error: "ID Marca inválida!!" });
    }

    if (!modelo) {
      return response.status(200).json({ Error: "ID Modelo inválido!!" });
    }

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
