const express = require("express");
const alteracaoUsuario = express();
const tabelaUsuarios = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const bcrypt = require("bcrypt");
const saltRounds = 10; // saltRounds é a quantidade de vezes que o algoritmo é executado

alteracaoUsuario.put("/alterar-usuario/:id", async (request, response) => {
  const { id } = request.params;
  const { nome, email, usuario, senha, confirmaSenha } = request.body;

  try {
    const idUser = await tabelaUsuarios.findOne({
      where: {
        id: id, //Quando o ID passado por parametro for igual ao do banco
      },
    });

    const emailUser = await tabelaUsuarios.findOne({
      where: {
        email: email, // Quando o e-mail da requisição for igual ao e-mail do banco
      },
    });

    const usuarioUser = await tabelaUsuarios.findOne({
      where: {
        usuario: usuario, // Quando o usuario da requisiçao for igual ao do banco
      },
    });

    if (!idUser) {
      return response.status(400).json({ Error: "Usuário não encontrado!" });
    }

    // Validação de usuário e validação de e-mail
    if (usuarioUser && emailUser) {
      return response
        .status(400)
        .json({ Error: "Usuário e E-mail já cadastrado no sistema" });
    } else if (emailUser) {
      return response
        .status(400)
        .json({ Error: "E-mail já cadastrado no sistema" });
    } else if (usuarioUser) {
      return response
        .status(400)
        .json({ Error: "Usuário já cadastrado no sistema" });
    }

    //Validação de senha
    if (senha === "" && confirmaSenha === "") {
      return response
        .status(400)
        .json({ Error: "Os campos das senhas devem ser preenchidos" });
    } else if (senha !== confirmaSenha) {
      return response.status(400).json({ Error: "As senhas estão diferentes" });
    } else if (senha.length < 5 && confirmaSenha.length < 5) {
      return response
        .status(400)
        .json({ Error: "A senha deverá ter no mínimo 5 caracteres" });
    } else {
      const hashSenha = bcrypt.hashSync(request.body.senha, saltRounds);

      await tabelaUsuarios.update(
        {
          nome: nome,
          email: email,
          usuario: usuario,
          senha: hashSenha,
        },
        { where: { id: request.params.id } }
      );

      return response
        .status(200)
        .json({ Sucess: "Usuário alterado com sucesso!" });
    }
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .json({ Error: "Não foi possível alterar o usuário!!" });
  }
});

module.exports = alteracaoUsuario;
