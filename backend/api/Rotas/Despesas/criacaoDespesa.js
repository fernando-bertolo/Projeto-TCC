const express = require("express");
const criacaoDespesa = express();
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");

criacaoDespesa.post("/criacao-despesa", async (request, response) => {
  const { Titulo, Data, idUsuario, descricao, valor } = request.body;

  try {
    tabelaDespesa.create({
      Titulo: Titulo,
      Data: Data,
      idUsuario: idUsuario,
      descricao: descricao,
      valor: valor,
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
