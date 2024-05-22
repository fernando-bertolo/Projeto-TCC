const express = require("express");
const visualizarVeiculos = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");
const Marcas = require("../../../Database/Tabelas/Marcas/marcas.js");
const Modelos = require("../../../Database/Tabelas/Modelos/modelos.js");
const Versoes = require("../../../Database/Tabelas/Versoes/versoes.js");
const Acessorios = require("../../../Database/Tabelas/Acessorios/acessorios.js");
const AcessoriosVeiculos = require("../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");
const Vendas = require("../../../Database/Tabelas/Vendas/Vendas.js");
const { Op } = require("sequelize");
const sequelize = require("../../../Database/database.js");

visualizarVeiculos.get("/visualizar-veiculo", async (request, response) => {
  try {
    const veiculos = await tabelaVeiculo.findAll({
      where: {
        idVeiculo: {
          [Op.notIn]: sequelize.literal("(SELECT idVeiculo FROM Vendas)"),
        },
      },
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

visualizarVeiculos.get(
  "/visualizar-veiculo-vendido",
  async (request, response) => {
    try {
      const veiculosVendidos = await tabelaVeiculo.findAll({
        include: [
          {
            model: Vendas,
            required: true, //Inner Join
            attributes: ["idVenda", "dataVenda", "valorVenda"],
          },
        ],
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

      return response.send(veiculosVendidos);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Falha na visualização do veículo vendido!!" });
    }
  }
);

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
