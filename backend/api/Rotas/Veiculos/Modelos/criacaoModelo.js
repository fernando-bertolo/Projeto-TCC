const express = require("express");
const criacaoModelo = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");

criacaoModelo.post("/criacao-modelo", async (request, response) => {
  const { idMarca, nomeModelo } = request.body;
  try {
    const modelo = await tabelaModelos.findOne({
      where: {
        nomeModelo: nomeModelo,
      },
    });

    if (modelo) {
      return response
        .status(400)
        .json({ Error: "Modelo já cadastrado no sistema!!" });
    }

    tabelaModelos.create({
      idMarca: idMarca,
      nomeModelo: nomeModelo,
    });

    return response
      .status(200)
      .json({ message: "Modelo cadastrado com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = criacaoModelo;
