const express = require("express");
const exclusaoDespesa = express();
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");
const tabelaDespesaVeiculo = require("../../../Database/Tabelas/Despesas_veiculos/despesasVeiculos");

exclusaoDespesa.delete("/exclusao-despesa/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const buscaDespesaID = await tabelaDespesa.findOne({
      where: {
        idDespesa: id,
      },
    });

    if (!buscaDespesaID) {
      return response.status(400).json({ Error: "ID inválido!!" });
    } else {
      tabelaDespesa.destroy({
        where: {
          idDespesa: id,
        },
      });
      tabelaDespesaVeiculo.destroy({
        where: {
          idDespesa: id,
        },
      });

      return response
        .status(200)
        .json({ message: "Despesa excluída com sucesso!!" });
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível excluir as Despesas" });
  }
});

module.exports = exclusaoDespesa;
