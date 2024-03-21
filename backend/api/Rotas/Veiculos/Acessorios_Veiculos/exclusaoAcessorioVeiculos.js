const express = require("express");
const deletarAcessorioVeiculo = express();
const tabelaAcessorioVeiculo = require("../../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

deletarAcessorioVeiculo.delete(
  "/deletar-acessorio-veiculo/:id",
  async (request, response) => {
    const { id } = request.params;

    try {
      const acessorioVeiculoID = await tabelaAcessorioVeiculo.findOne({
        where: {
          idAcessorioVeiculo: id,
        },
      });

      if (!acessorioVeiculoID) {
        return response.status(400).json({ Error: "ID inválido!!" });
      }

      tabelaAcessorioVeiculo.destroy({
        where: {
          idAcessorioVeiculo: id,
        },
      });

      return response.status(200).json({
        message:
          "Relacionamento entre veículo e acessório excluído com sucesso!!",
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        Error: "Falha na exclusão do relacionamento entre veículo e acessório",
      });
    }
  }
);

module.exports = deletarAcessorioVeiculo;
