const express = require("express");
const visualizarModelos = express();
const tabelaModelos = require("../../../../Database/Tabelas/Modelos/modelos.js");
const Marcas = require("../../../../Database/Tabelas/Marcas/marcas.js");

//Rota get para visualizar todos os modelos

visualizarModelos.get("/visualizar-modelos", async (request, response) => {
  try {
    const visualizaModelos = await tabelaModelos.findAll({
      include: [
        {
          model: Marcas, // Inclui os dados da Marca
          attributes: ["nomeMarca"], // Seleciona apenas o nome da Marca,
        },
      ],
    });

    response.send(visualizaModelos);
  } catch (error) {
    console.log(error);
  }
});

//Rota get para visualizar modelos específicos

visualizarModelos.get("/visualizar-modelos/:idMarca", async (request, response) => {
  const {idMarca} = request.params;
  try {
    const visualizaModeloEspecifico = await tabelaModelos.findAll({
        where:{
          idMarca: idMarca,
        }
      });

    if (!visualizaModeloEspecifico) {
      return response.status(400).json({ Error: "Modelo não existe!!" });
    } else {
      response.send(visualizaModeloEspecifico);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = visualizarModelos;
