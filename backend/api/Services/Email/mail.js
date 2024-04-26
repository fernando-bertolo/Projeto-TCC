const nodemailer = require("nodemailer");

const smtp = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "fernando.bertolo.jr123@gmail.com",
    pass: "yetq spel hfwe fflt",
  },
});

module.exports = smtp;
