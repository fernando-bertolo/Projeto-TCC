const express = require("express");
const visualizarDespesa = express();
const tabelaDespesa = require("../../../Database/Tabelas/Despesas/Despesas");
const Marca = require("../../../Database/Tabelas/Marcas/marcas");
const Modelo = require("../../../Database/Tabelas/Modelos/modelos");
const Versao = require("../../../Database/Tabelas/Versoes/versoes");
const Veiculo = require("../../../Database/Tabelas/Veiculos/veiculos");
const Usuario = require("../../../Database/Tabelas/Usuarios/usuarios");

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
          model: Usuario,
          attributes: ["nome"],
        },
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

visualizarDespesa.get("/visualizar-despesa/:id", async (request, response) => {
  const { id } = request.params;
  try {
    //const registroDespesa = await tabelaDespesa.findByPk(id);
    //return response.send(registroDespesa);

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
          model: Usuario,
          attributes: ["nome"],
        },
        {
          model: Veiculo,
          where: {
            idVeiculo: id,
          },
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
