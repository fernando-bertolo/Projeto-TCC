// Este arquivo realiza o sincronismo das alterações do banco de dados

(async () => {
    const database = require("./database");
    const usuarios = require("./Tabelas/Usuarios/usuarios");

    await database.sync();
})();