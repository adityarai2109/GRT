import  express from 'express'
import Cardarray from './data/cardarray.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

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

  const MODE = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${MODE} mode on ${PORT}`));
