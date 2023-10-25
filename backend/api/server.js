const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const rotas = require("./Controllers/index.js");

const port = 3010;
app.listen(port);

app.get("/", (req,res) => {
    console.log("API Funcionando na porta 3010");
    res.send("API funcionando na porta 3010")
});

app.use(rotas);


module.exports = app;   