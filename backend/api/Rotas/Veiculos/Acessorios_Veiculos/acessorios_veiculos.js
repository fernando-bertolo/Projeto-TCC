const express = require("express");
const acessorioVeiculo = express();
const tabelaAcessorioVeiculo = require("../../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

acessorioVeiculo.post(
  "/criacao-acessorio-veiculo",
  async (request, response) => {
    try {
      response.send("Rodando");
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Erro na associação de veículos e acessórios!!" });
    }
  }
);

module.exports = acessorioVeiculo;
