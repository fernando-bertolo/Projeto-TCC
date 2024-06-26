const express = require("express");
const cors = require("cors");
const app = express();
//require("../Database/sync.js");
require("../Database/associations.js");
app.use(express.json());
app.use(cors());
const rotas = require("./Controllers/index.js");

const port = 3010;
app.listen(port);

app.use(rotas);

module.exports = app;
