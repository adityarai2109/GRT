import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
const app = express();

// config
dotenv.config();
connectDB();

// routes
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirname2 = path.dirname(__dirname);

// middlewares
app.use(express.json());
app.use(cors());

app.use("/upload", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", productRoutes);
// console.log(path.dirname(__dirname))

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname2, "/frontend/build")));

    app.get("*", (req, res) =>
        res.sendFile(
            path.resolve(__dirname2, "frontend", "build", "index.html")
        )
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running....");
    });
}

const homepage =
    ("/",
    (req, res, next) => {
        console.log("homepage middleware working ");
        next();
    });

// middleware
app.use(homepage);

app.get("/", homepage, (req, res) => {
    //   res.send("hello")
    res.status(200).json({ message: "homepage" });
});

const MODE = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${MODE} mode on ${PORT}`));

// "proxy": "https://grt-backend.herokuapp.com/",
