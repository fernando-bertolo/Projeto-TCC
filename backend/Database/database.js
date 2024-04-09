// Neste arquivo esta as configurações do banco de dados local

const Sequelize = require("sequelize");
const sequelize = new Sequelize("databasecar", "root", "root", {
    dialect: "mysql", // o banco que vai utilizar e o sequelize traduzir o js
    host: "mysql-tcc", // host é onde esta o banco
    port: "3306", // porta do banco
    logging: console.log
});

sequelize
    .authenticate()
    .then(function () {
        console.log("Conectado com sucesso");
    })
    .catch(function (erro){
        console.log(`Falha ao se conectar: ${erro}`);
    })
module.exports = sequelize;