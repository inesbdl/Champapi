const express = require("express");

const { db } = require("./models/db");

const champiRouter = require("./routes/champiRoutes");
const effetsRouter = require("./routes/effetsRoutes");
const scientifiquesRouter = require("./routes/scientifiquesRoutes")

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/champi", champiRouter);
app.use("/api/v1/effets", effetsRouter);
app.use("/api/v1/scientifiques", scientifiquesRouter);

db.sync()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    });