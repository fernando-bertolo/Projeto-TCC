const express = require("express");
const criacaoDespesa = express();
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");
const tabelaDespesaVeiculo = require("../../../Database/Tabelas/Despesas_veiculos/despesasVeiculos");

criacaoDespesa.post("/criacao-despesa", async (request, response) => {
  const { idVeiculo, Titulo, Data, idUsuario, descricao, valor } = request.body;

  try {
    const despesa = await tabelaDespesa.create({
      Titulo: Titulo,
      Data: Data,
      idUsuario: idUsuario,
      descricao: descricao,
      valor: valor,
    });

    await tabelaDespesaVeiculo.create({
      idDespesa: despesa.idDespesa,
      idVeiculo: idVeiculo,
    });

    return response
      .status(200)
      .json({ message: "Despesa criada com sucesso!!" });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível criar a despesa!!" });
  }
});

module.exports = criacaoDespesa;
