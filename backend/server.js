const express = require("express");
const Cardarray = require("./data/cardarray");
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/api/products", (req, res) => {
  res.json(Cardarray);
});

app.get("/api/products/:id", (req, res) => {
  const product = Cardarray.find((p) => p.id == req.params.id);
  res.json(product);
});

app.listen(5000, console.log("server started at 5k :)"));
