const nodemailer = require("nodemailer"); 

const smtp = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c8a31c3def9407",
      pass: "********0fa9"
    }
});

module.exports = smtp;