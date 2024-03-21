const express = require("express");
const deletarAcessorios = express();
const tabelaAcessorio = require("../../../../Database/Tabelas/Acessorios/acessorios.js");
const tabelaAcessorioVeiculo = require("../../../../Database/Tabelas/Acessorios_veiculos/acessoriosVeiculos.js");

deletarAcessorios.delete(
  "/deletar-acessorio/:id",
  async (request, response) => {
    const { id } = request.params;
    try {
      const acessorio = await tabelaAcessorio.findOne({
        where: {
          idAcessorio: id,
        },
      });

      const acessorioVeiculo = await tabelaAcessorioVeiculo.findOne({
        where: {
          idAcessorio: id,
        },
      });

      if (!acessorio) {
        return response
          .status(400)
          .json({ Error: "Acessório não encontrado!!" });
      }

      //Verifica se possui acessórios associados a um veículo
      if (acessorioVeiculo) {
        tabelaAcessorioVeiculo.destroy({
          where: {
            idAcessorio: id,
          },
        });

        tabelaAcessorio.destroy({
          where: {
            idAcessorio: id,
          },
        });

        return response
          .status(200)
          .json({ message: "Acessório excluído com sucesso!!" });
      }
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Não foi possível deletar o acessório" });
    }
  }
);

module.exports = deletarAcessorios;
