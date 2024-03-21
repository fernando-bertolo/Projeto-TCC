const nodemailer = require("nodemailer");

const smtp = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dda4a02dcc172d",
    pass: "0ad8df395d7c03",
  },
});

module.exports = smtp;
