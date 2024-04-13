const nodemailer = require("nodemailer");

const smtp = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0c0b31e0ae45f6",
    pass: "bb16b88bf34e27",
  },
});

module.exports = smtp;
