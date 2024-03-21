const express = require("express");
const visualizarAcessorios = express();
const tabelaAcessorio = require("../../../../Database/Tabelas/Acessorios/acessorios");

visualizarAcessorios.get("/visualizar-acessorio", async (request, response) => {
  try {
    const acessorios = await tabelaAcessorio.findAll();

    return response.send(acessorios);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ Error: "Não foi possível visualizar os acessórios" });
  }
});

visualizarAcessorios.get(
  "/visualizar-acessorio/:id",
  async (request, response) => {
    try {
      const acessorioUnico = await tabelaAcessorio.findByPk(request.params.id);

      if (!acessorioUnico) {
        return response.status(400).json({ Error: "Acessório não existe!!" });
      }

      return response.send(acessorioUnico);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Não foi possível visualizar o acessório específico" });
    }
  }
);

module.exports = visualizarAcessorios;
