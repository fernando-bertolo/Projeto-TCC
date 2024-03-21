const express = require("express");
const visualizarAcessorioVeiculo = express();
const tabelaAcessorioVeiculo = require("../../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

visualizarAcessorioVeiculo.get(
  "/visualizar-acessorio-veiculo",
  async (request, response) => {
    try {
      const acessorioVeiculo = await tabelaAcessorioVeiculo.findAll();

      return response.send(acessorioVeiculo);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        Error:
          "Não foi possível visualizar a associação de acessórios e veículos",
      });
    }
  }
);

visualizarAcessorioVeiculo.get(
  "/visualizar-acessorio-veiculo/:id",
  async (request, response) => {
    const { id } = request.params;
    try {
      const acessorioVeiculoUnico = await tabelaAcessorioVeiculo.findOne({
        where: {
          idAcessorioVeiculo: id,
        },
      });

      if (!acessorioVeiculoUnico) {
        return response.status(400).json({ Error: "ID inválido!!" });
      }

      return response.send(acessorioVeiculoUnico);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        Error:
          "Falha na visualização da associação de acessório e veículos únicos",
      });
    }
  }
);

module.exports = visualizarAcessorioVeiculo;
