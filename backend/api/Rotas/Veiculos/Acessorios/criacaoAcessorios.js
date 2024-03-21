const express = require("express");
const criacaoAcessorios = express();
const tabelaAcessorio = require("../../../../Database/Tabelas/Acessorios/acessorios.js");

criacaoAcessorios.post("/criacao-acessorios", async (request, response) => {
  const { nomeAcessorio } = request.body;
  try {
    const acessorio = await tabelaAcessorio.findOne({
      where: {
        nomeAcessorio: nomeAcessorio,
      },
    });

    if (acessorio) {
      return response
        .status(400)
        .json({ Error: "Acessório já cadastrado no sistema !!" });
    }

    tabelaAcessorio.create({
      nomeAcessorio: nomeAcessorio,
    });

    return response
      .status(200)
      .json({ message: "Acessório criado com sucesso!!" });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível criar acessórios!!" });
  }
});

module.exports = criacaoAcessorios;
