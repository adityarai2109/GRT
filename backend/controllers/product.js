import  Product from '../models/productModel.js'


export const createProduct = (req, res) => {

  const { name, category,description, price, quantity } = req.body;
  
  const image  = req.file.filename
 //console.log(req.file)
  const product = new Product({
    name,
    category,
    description,
    price, 
    image,
    quantity,  
   });   
   
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
     res.status(200).json({ product, files: req.files });
      console.log("new product added !!!")
    }
  });
 //  res.status(200).json({message: "sss"})
}


export const getProducts  = async (req, res) => {
const products = await Product.find({}).exec();
res.status(200).json(products)

}   
 