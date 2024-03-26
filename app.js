const express = require("express");

const { db } = require("./models/db");

const heroRouter = require("./routes/heroRoute")

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/heroes", heroRouter);

db.sync() //crée le fichier de la base de donnée 
.then(async () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
});