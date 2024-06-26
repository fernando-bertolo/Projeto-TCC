const express = require("express");
const visualizarVersao = express();
const tabelaVersao = require("../../../../Database/Tabelas/Versoes/versoes.js");
const Modelos = require("../../../../Database/Tabelas/Modelos/modelos.js");
const Marcas = require("../../../../Database/Tabelas/Marcas/marcas.js");

//Rota get para visualizar todas as versões

visualizarVersao.get("/visualizar-versao", async (request, response) => {
  try {
    const visualizarVersao = await tabelaVersao.findAll({
      include: [
        {
          model: Modelos,
          attributes: ["nomeModelo"],
          include: [
            {
              model: Marcas,
              attributes: ["nomeMarca"],
            },
          ],
        },
      ],
    });

    return response.send(visualizarVersao);
  } catch (error) {
    console.log(error);
  }
});

//Rota get para visualizar versão específica
visualizarVersao.get("/visualizar-versao/:id", async (request, response) => {
  try {
    const visualizaVersaoUnica = await tabelaVersao.findByPk(request.params.id);

    if (!visualizaVersaoUnica) {
      return response.status(400).json({ Error: "ID inválido" });
    } else {
      response.send(visualizaVersaoUnica);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarVersao;
