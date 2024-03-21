const express = require("express");
const { where } = require("sequelize");
const alteracaoClientes = express();
const tabelaClientes = require("../../../Database/Tabelas/Clientes/clientes");
const { Op } = require("sequelize");
const axios = require("axios");
const isValidCPF = require("../../Services/CPF/validaCpf.js");

alteracaoClientes.put("/alterar-cliente/:id", async (request, response) => {
  const { id } = request.params;
  const {
    nome,
    nacionalidade,
    estadoCivil,
    email,
    dataNascimento,
    rg,
    celular,
    cep,
    endereco,
    bairro,
    cidade,
    numero,
    estado,
  } = request.body;

  try {
    await tabelaClientes.update(
      {
        nome: nome,
        nacionalidade: nacionalidade,
        estadoCivil: estadoCivil,
        email: email,
        dataNascimento: dataNascimento,
        rg: rg,
        celular: celular,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        numero: numero,
        estado: estado,
      },
      { where: { id: request.params.id } }
    );

    return response
      .status(200)
      .json({ message: "Usuário alterado com sucesso!!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = alteracaoClientes;
