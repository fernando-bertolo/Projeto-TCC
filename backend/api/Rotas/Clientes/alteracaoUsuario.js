const express = require("express");
const { where } = require("sequelize");
const alteracaoClientes = express();
const tabelaClientes = require("../../../Database/Tabelas/Clientes/clientes");
const { Op } = require("sequelize");

alteracaoClientes.put("/alterar-cliente/:id", async (request, response) => {
  const { id } = request.params;
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
    const cpfUsuario = await tabelaClientes.findOne({
      where: {
        cpf: { [Op.ne]: cpf }, // Ignora o cliente atual pelo cpf
        id: id,
      },
    });

    if (cpfUsuario) {
      return response
        .status(400)
        .json({ Error: "CPF já cadastrado no sistema!" });
    }

    await tabelaClientes.update(
      {
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
