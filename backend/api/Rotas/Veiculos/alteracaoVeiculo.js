const express = require("express");
const alteracaoVeiculo = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");
const tabelaMarca = require("../../../Database/Tabelas/Marcas/marcas.js");
const tabelaModelo = require("../../../Database/Tabelas/Modelos/modelos.js");
const tabelaVersao = require("../../../Database/Tabelas/Versoes/versoes.js");
const tabelaAcessorioVeiculo = require("../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

alteracaoVeiculo.put("/alteracao-veiculo/:id", async (request, response) => {
  const { id } = request.params;
  const {
    idMarca,
    idModelo,
    idVersao,
    ano,
    combustivel,
    cor,
    quilometragem,
    valor,
    placa,
    idAcessorios,
  } = request.body;
  try {
    const marcaID = await tabelaMarca.findOne({
      where: {
        idMarca: idMarca,
      },
    });

    const modeloID = await tabelaModelo.findOne({
      where: {
        idModelo: idModelo,
      },
    });

    const versaoID = await tabelaVersao.findOne({
      where: {
        idVersao: idVersao,
      },
    });

    const veiculoID = await tabelaVeiculo.findOne({
      where: {
        idVeiculo: id,
      },
    });

    if (!veiculoID) {
      return response.status(400).json({ Error: "ID do veículo inválido!!" });
    }

    if (!marcaID || !modeloID || !versaoID) {
      return response
        .status(400)
        .json({ Error: "Parâmetros da requisição inválidos!!" });
    }

    const veiculo = await tabelaVeiculo.update(
      {
        idMarca: idMarca,
        idModelo: idModelo,
        idVersao: idVersao,
        ano: ano,
        combustivel: combustivel,
        cor: cor,
        quilometragem: quilometragem,
        valor: valor,
        placa: placa,
      },
      { where: { idVeiculo: request.params.id } }
    );

    await idAcessorios.map((acessorioID) => {
      tabelaAcessorioVeiculo.create({
        idVeiculo: veiculo.idVeiculo,
        idAcessorio: acessorioID,
      });
    });

    return response
      .status(200)
      .json({ message: "Veículo alterado com sucesso!!" });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Falha na alteração do veículo" });
  }
});

module.exports = alteracaoVeiculo;
