const express = require("express");
const criacaoClientes = express();
const tabelaClientes = require("../../../Database/Tabelas/Clientes/clientes");
const isValidCPF = require("../../Services/CPF/validaCpf.js");

criacaoClientes.post("/criacao-clientes", async (request, response) => {
  const {
    nome,
    nacionalidade,
    estadoCivil,
    cpf,
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
    const cpfCliente = await tabelaClientes.findOne({
      where: {
        cpf: cpf,
      },
    });

    if (cpfCliente) {
      return response
        .status(400)
        .json({ Error: "CPF já cadastrado no sistema!!" });
    } else if (!isValidCPF(cpf)) {
      return response.status(400).json({ Error: "CPF inválido" });
    }
    tabelaClientes.create({
      nome: nome,
      nacionalidade: nacionalidade,
      estadoCivil: estadoCivil,
      cpf: cpf,
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
    });

    return response
      .status(200)
      .json({ message: "Cliente cadastrado com sucesso" });
  } catch (error) {}
});

module.exports = criacaoClientes;
