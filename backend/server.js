import  express from 'express'
import Cardarray from './data/cardarray.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
const app = express();

// config
dotenv.config();
connectDB();

// routes
import  authRoutes from './routes/auth.js'
//import productRoutes from  './routes/product.js'


// middlewares
app.use(express.json());
//app.use("/public", express.static(path.join(__dirname, "uploads")));
 app.use("/api", authRoutes);
// app.use("/api", productRoutes);

const homepage = ("/", (req, res, next) => {
      console.log("homepage middleware working ")
     next();
})

// middleware
app.use(homepage);

app.get("/", homepage, (req, res) => {
     //   res.send("hello")
        res.status(200).json({ message: "homepage" });
        
});


app.get("/api/products", (req, res) => {
  res.json(Cardarray);
});

app.get("/api/products/:id", (req, res) => {
  const product = Cardarray.find((p) => p.id == req.params.id);
  res.json(product);
});

  const MODE = process.env.NODE_ENV;
  const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${MODE} mode on ${PORT}`));
