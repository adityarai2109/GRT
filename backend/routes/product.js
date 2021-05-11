
import express from 'express'
import multer from "multer";
import shortid from 'shortid'
import path from "path";
import { fileURLToPath } from "url";

import  { createProduct } from '../controllers/product.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

 //console.log(path.dirname(__dirname));  
// uploads folder parent directory path

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
}); 

export const upload = multer({ storage });

router.post( "/product/create", upload.single('image'),createProduct);
//router.post("/product/create",  createProduct);

export default router