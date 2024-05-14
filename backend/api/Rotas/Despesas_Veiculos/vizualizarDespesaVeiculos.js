const express = require("express");
const visualizarDespesaVeiculo = express();
const tabelaDespesaVeiculo = require("../../../Database/Tabelas/Despesas_veiculos/despesasVeiculos");

visualizarDespesaVeiculo.get(
  "/visualizar-despesa-veiculos",
  async (request, response) => {
    try {
      const buscaDespesaVeiculo = await tabelaDespesaVeiculo.findAll();

      return response.send(buscaDespesaVeiculo);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        Error: "Não foi possível visualizar o relacionamento despesa Veiculo!!",
      });
    }
  }
);

module.exports = visualizarDespesaVeiculo;
