const express = require("express");
const criacaoDespesaVeiculo = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos");
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");
const tabelaDespesaVeiculo = require("../../../Database/Tabelas/Despesas_veiculos/despesasVeiculos");

criacaoDespesaVeiculo.post(
  "/criacao-despesa-veiculo",
  async (request, response) => {
    const { idVeiculo, idDespesa } = request.body;
    try {
      const buscaVeiculosID = await tabelaVeiculo.findOne({
        where: {
          idVeiculo: idVeiculo,
        },
      });

      const buscaDespesasID = await tabelaDespesa.findOne({
        where: {
          idDespesa: idDespesa,
        },
      });

      if (!buscaVeiculosID || !buscaDespesasID) {
        return response.status(400).json({ Error: "Parâmetros inválidos!!" });
      } else {
        await tabelaDespesaVeiculo.create({
          idVeiculo: idVeiculo,
          idDespesa: idDespesa,
        });

        return response.status(200).json({
          message:
            "Relacionamento de Despesas e Veículos criados com sucesso!!",
        });
      }
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Não foi possível criar as DespesasVeiculos" });
    }
  }
);

module.exports = criacaoDespesaVeiculo;
