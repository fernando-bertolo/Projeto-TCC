const express = required("express");
const cors = required("cors");
const app = express();
app.use(express.json());
app.use(cors());

const port = 3010;
app.listen(port);

app.get("/", (req,res) => {
    res.send("API Funcionando na porta 3010");
})