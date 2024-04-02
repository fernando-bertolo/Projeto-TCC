const express = require("express");
const visualizarVeiculos = express();
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");

visualizarVeiculos.get("/visualizar-veiculo", async (request, response) => {
  try {
    const veiculos = await tabelaVeiculo.findAll();

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
