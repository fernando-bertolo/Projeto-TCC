const express = require("express");
const acessorioVeiculo = express();
const tabelaAcessorioVeiculo = require("../../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");
const tabelaVeiculo = require("../../../../Database/Tabelas/Veiculos/veiculos.js");
const tabelaAcessorio = require("../../../../Database/Tabelas/Acessorios/acessorios.js");

acessorioVeiculo.post(
  "/criacao-acessorio-veiculo",
  async (request, response) => {
    const { idVeiculo, idAcessorio } = request.body;
    try {
      const veiculoID = await tabelaVeiculo.findOne({
        where: {
          idVeiculo: idVeiculo,
        },
      });

      const acessorioID = await tabelaAcessorio.findOne({
        where: {
          idAcessorio: idAcessorio,
        },
      });

      if (!veiculoID || !acessorioID) {
        return response.status(400).json({ Error: "Parâmetros inválidos!!" });
      }

      tabelaAcessorioVeiculo.create({
        idVeiculo: idVeiculo,
        idAcessorio: idAcessorio,
      });

      return response
        .status(200)
        .json({ message: "Relacionamento entre veículo e acessório criado!!" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Erro na associação de veículos e acessórios!!" });
    }
  }
);

module.exports = acessorioVeiculo;
