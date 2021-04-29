import  Product from '../models/productModel.js'


export const createProduct = (req, res) => {
  res.status(200).json( { file: req.file, body: req.body } );

//  const { title, category,description, price, quantity, rating } = req.body;
//   let image  = req.file.filename

//   const product = new Product({
//     title,
//     category,
//     description,
//     price, 
//     image,  
//     quantity,  
//     rating,
//    // adminName: req.user.name,
//    });
   
//   product.save((error, product) => {
//     if (error) return res.status(400).json({ error });
//     if (product) {
//       res.status(201).json({ product, files: req.files });
//     }
//   });
}

