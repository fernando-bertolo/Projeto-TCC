const express = require("express");
const visualizarDespesa = express();
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");
const Marca = require("../../../Database/Tabelas/Marcas/marcas");
const Modelo = require("../../../Database/Tabelas/Modelos/modelos");
const Versao = require("../../../Database/Tabelas/Versoes/versoes");
const Veiculo = require("../../../Database/Tabelas/Veiculos/veiculos");

visualizarDespesa.get("/visualizar-despesa", async (request, response) => {
  try {
    const registroDespesas = await tabelaDespesa.findAll({
      attributes: [
        "idDespesa",
        "Data",
        "Titulo",
        "idUsuario",
        "descricao",
        "valor",
      ],
      include: [
        {
          model: Veiculo,
          attributes: [
            "idVeiculo",
            "ano",
            "combustivel",
            "quilometragem",
            "valor",
            "placa",
          ],
          include: [
            {
              model: Marca,
              attributes: ["nomeMarca"],
              include: [
                {
                  model: Modelo,
                  attributes: ["nomeModelo"],
                  include: [
                    {
                      model: Versao,
                      attributes: ["nomeVersao"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    return response.send(registroDespesas);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível visualizar as Despesas" });
  }
});

module.exports = visualizarDespesa;
