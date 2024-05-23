const express = require("express");
const alterarSenha = express();
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const crypto = require("crypto");
const { where, DATE } = require("sequelize");
const mail = require("../Email/mail.js");

alterarSenha.post("/esquecer-senha", async (request, response) => {
  const { email } = request.body;
  try {
    const usuario = await tabelaUsuario.findOne({
      where: {
        email: email,
      },
    });

    if (!usuario) {
      return response.status(400).json({
        message: "E-mail não encontrado, por favor digite um e-mail válido!!",
      });
    }

    const tokenEmail = crypto.randomBytes(20).toString("hex");
    const horaAtual = new Date();
    horaAtual.setHours(horaAtual.getHours() + 1);

    await tabelaUsuario.update(
      {
        tokenSenha: tokenEmail,
        horaExpiracaoToken: horaAtual,
      },
      { where: { email: email } }
    );

    // Envia e-mail
    await mail.sendMail({
      to: email,
      from: "fernando.bertolo.jr123@gmail.com",
      subject: "Esqueceu sua senha?",
      text: `Você solicitou a alteração de senha. Segue o link para resetar a senha: http://localhost:3000/resetar-senha/${tokenEmail}`,
    });

    response.status(200).send({ message: "Sucesso ao enviar o e-mail" });
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: "ERRO" });
  }
});

module.exports = alterarSenha;
