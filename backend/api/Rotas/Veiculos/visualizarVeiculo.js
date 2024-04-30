const express = require("express");
const visualizarVeiculos = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");
const Marcas = require("../../../Database/Tabelas/Marcas/marcas.js");
const Modelos = require("../../../Database/Tabelas/Modelos/modelos.js");
const Versoes = require("../../../Database/Tabelas/Versoes/versoes.js");
const Acessorios = require("../../../Database/Tabelas/Acessorios/acessorios.js");
const AcessoriosVeiculos = require("../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

visualizarVeiculos.get("/visualizar-veiculo", async (request, response) => {
  try {
    const veiculos = await tabelaVeiculo.findAll({
      attributes: [
        "idVeiculo",
        "idMarca",
        "idModelo",
        "idVersao",
        "ano",
        "combustivel",
        "cor",
        "quilometragem",
        "valor",
        "placa",
        "idStatus",
      ],
      include: [
        {
          model: Marcas,
          attributes: ["nomeMarca"],
        },
        {
          model: Modelos,
          attributes: ["nomeModelo"],
        },
        {
          model: Versoes,
          attributes: ["nomeVersao"],
        },
        {
          model: Acessorios,
          attributes: ["nomeAcessorio"],
          through: {
            attributes: [], // Evite selecionar atributos da tabela de junção
          },
        },
      ],
    });

    return response.send(veiculos);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível visualizar todos os Veículos" });
  }
});

visualizarVeiculos.get("/visualizar-veiculo/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const veiculoUnico = await tabelaVeiculo.findOne({
      where: {
        idVeiculo: id,
      },
    });

    if (!veiculoUnico) {
      return response.status(400).json({ Error: "ID inválido!!" });
    }

    return response.send(veiculoUnico);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível visualizar este veículo" });
  }
});

module.exports = visualizarVeiculos;
