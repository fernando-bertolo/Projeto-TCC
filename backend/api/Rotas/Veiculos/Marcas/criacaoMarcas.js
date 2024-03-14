const express = require("express");
const criacaoMarcas = express();
const tabelaMarcas = require("../../../../Database/Tabelas/Marcas/marcas");

criacaoMarcas.post("/criacao-marcas", async (request, response) => {
  const { nomeMarca } = request.body;

  try {
    tabelaMarcas.create({
      nomeMarca: nomeMarca,
    });

    return response.status(200).json({ message: "Marca cadastrada" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = criacaoMarcas;
