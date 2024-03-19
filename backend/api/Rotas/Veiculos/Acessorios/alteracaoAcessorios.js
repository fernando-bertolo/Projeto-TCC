const express = require("express");
const alteracaoAcessorios = express();
const tabelaAcessorio = require("../../../../Database/Tabelas/Acessorios/acessorios.js");

alteracaoAcessorios.put(
  "/alteracao-acessorios/:id",
  async (request, response) => {
    const { id } = request.params;
    const { nomeAcessorio } = request.body;
    try {
      const acessorioID = tabelaAcessorio.findOne({
        where: {
          idAcessorio: id,
        },
      });

      const acessorioNome = tabelaAcessorio.findOne({
        where: {
          nomeAcessorio: nomeAcessorio,
        },
      });

      if (!acessorioID) {
        return response.status(400).json({ Error: "Acessório não existe!!" });
      }

      if (acessorioNome) {
        return response
          .status(400)
          .json({ Error: "Acessório já cadastrado no sistema!!" });
      }

      tabelaAcessorio.update(
        {
          nomeAcessorio: nomeAcessorio,
        },
        { where: { idAcessorio: request.params.id } }
      );

      return response
        .status(200)
        .json({ message: "Acessório alterado com sucesso!!" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ Error: "Não foi possível alterar o acessório" });
    }
  }
);

module.exports = alteracaoAcessorios;
