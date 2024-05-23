const express = require("express");
const deletarVeiculo = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");
const tabelaAcessorioVeiculo = require("../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

deletarVeiculo.delete("/deletar-veiculo/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const veiculo = await tabelaVeiculo.findOne({
      where: {
        idVeiculo: id,
      },
    });

    const acessorioVeiculo = await tabelaAcessorioVeiculo.findOne({
      where: {
        idVeiculo: id,
      },
    });

    if (!veiculo) {
      return response.status(400).json({ Error: "ID do veículo inválido!!" });
    }

    // Verifica se possui acessorios associados ao veículo e se tiver exclui a associação
    if (acessorioVeiculo) {
      tabelaAcessorioVeiculo.destroy({
        where: {
          idVeiculo: id,
        },
      });

      tabelaVeiculo.destroy({
        where: {
          idVeiculo: id,
        },
      });

      return response
        .status(200)
        .json({ message: "Veículo excluído com sucesso!!" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ Error: "Falha ao excluir o veículo" });
  }
});

module.exports = deletarVeiculo;
