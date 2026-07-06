const express = require("express");
const cors = require("cors");

const produtos = require("./routes/produtos");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtos);

module.exports = app;