const express = require("express");
const criacaoVeiculo = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");
const tabelaMarca = require("../../../Database/Tabelas/Marcas/marcas.js");
const tabelaModelo = require("../../../Database/Tabelas/Modelos/modelos.js");
const tabelaVersao = require("../../../Database/Tabelas/Versoes/versoes.js");
const tabelaAcessorioVeiculo = require("../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

criacaoVeiculo.post("/criacao-veiculos", async (request, response) => {
  const {
    idMarca,
    idModelo,
    idVersao,
    idStatus,
    ano,
    combustivel,
    cor,
    quilometragem,
    valor,
    placa,
    idAcessorios,
  } = request.body;
  try {
    const marcaID = tabelaMarca.findOne({
      where: {
        idMarca: idMarca,
      },
    });

    const modeloID = tabelaModelo.findOne({
      where: {
        idModelo: idModelo,
      },
    });

    const versaoID = tabelaVersao.findOne({
      where: {
        idVersao: idVersao,
      },
    });

    if (!marcaID || !modeloID || !versaoID) {
      return response.status(400).json({ Error: "Parâmetros inválidos!!" });
    }

    const veiculo = await tabelaVeiculo.create({
      idMarca: idMarca,
      idModelo: idModelo,
      idVersao: idVersao,
      idStatus: idStatus,
      ano: ano,
      combustivel: combustivel,
      cor: cor,
      quilometragem: quilometragem,
      valor: valor,
      placa: placa,
    });

    const teste = await idAcessorios.map((acessorioID) => {
      tabelaAcessorioVeiculo.create({
        idVeiculo: veiculo.idVeiculo,
        idAcessorio: acessorioID,
      });
    });

    console.log(teste);

    return response
      .status(200)
      .json({ message: "Veículo criado com sucesso!!" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ Error: "Erro na criação do veículo!!" });
  }
});

module.exports = criacaoVeiculo;
