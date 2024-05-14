const express = require("express");
const alteracaoDespesa = express();
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");

alteracaoDespesa.put("/alteracao-despesa/:id", async (request, response) => {
  const { id } = request.params;
  const { Titulo, Data, idUsuario, descricao, valor } = request.body;
  try {
    const despesaUnica = await tabelaDespesa.findOne({
      where: {
        idDespesa: id,
      },
    });

    if (!despesaUnica) {
      return response.status(400).json({ Error: "ID inválido!!" });
    }

    tabelaDespesa.update(
      {
        Titulo: Titulo,
        Data: Data,
        idUsuario: idUsuario,
        descricao: descricao,
        valor: valor,
      },
      { where: { idDespesa: request.params.id } }
    );

    return response
      .status(200)
      .json({ message: "Despesa alterada com sucesso!!" });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível editar a despesa" });
  }
});

module.exports = alteracaoDespesa;
