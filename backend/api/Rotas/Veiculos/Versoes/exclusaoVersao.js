const express = require("express");
const deletarVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");
const tabelaVeiculo = require("../../../../Database/Tabelas/Veiculos/veiculos.js");

deletarVersao.delete("/deletar-versao/:idVersao", async (request, response) => {
  const { idVersao } = request.params;
  try {
    const versao = await tabelaVersao.findOne({
      where: {
        idVersao: idVersao,
      },
    });

    const verifyVehicle = await tabelaVeiculo.findOne({
      where: {
        idVersao: idVersao,
      },
    });


    if (!versao) {
      return response.status(400).json({ Error: "ID inválido" });
    } else if(verifyVehicle){
      return response.status(400).json({Error: "Não é possível excluir uma versão que esta sendo utilizada!!"})
      } else{
        tabelaVersao.destroy({
          where: {
            idVersao: idVersao,
          },
        });
        return response
          .status(200)
          .json({ message: "Versão excluída com sucesso!!" });
      }


    
  } catch (error) {
    console.log(error);
  }
});

module.exports = deletarVersao;
