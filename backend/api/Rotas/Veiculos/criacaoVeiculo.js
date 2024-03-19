const express = require("express");
const criacaoVeiculo = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");

criacaoVeiculo.post("/criacao-veiculos", async (request, response) => {
  try {
  } catch (error) {
    console.log(error);
    return response.status(500).json({ Error: "Erro na criação do veículo!!" });
  }
});

module.exports = criacaoVeiculo;
