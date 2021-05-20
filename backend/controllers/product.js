import Product from "../models/productModel.js";

export const createProduct = (req, res) => {
  const {
    name,
    material,
    design,
    bottomLength,
    duppataLength,
    topLength,
    description,
    price,
  } = req.body;

  const image = req.file.filename;
  //console.log(req.file)
  const product = new Product({
    name,
    category: "Suit",
    material,
    design,
    bottomLength,
    duppataLength,
    topLength,
    description,
    price,
    image,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(200).json({ product, files: req.files });
      console.log("new product added !!!");
    }
  });
  //  res.status(200).json({message: "sss"})
};

export const getProducts = async (req, res) => {
  const products = await Product.find({}).exec();
  res.status(200).json(products);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

export const updateProduct = async (req, res) => {
  const {
    name,
    material,
    design,
    bottomLength,
    duppataLength,
    topLength,
    description,
    price,
  } = req.body;

  const product = await Product.findById(req.params.id);
  let image = product.image;
  if (product) {
    product.name = name;
    product.material = material;
    product.design = design;
    product.bottomLength = bottomLength;
    product.duppataLength = duppataLength;
    product.topLength = topLength;
    product.description = description;
    product.price = price;
    product.image = image;

    if (typeof req.file != "undefined") product.image = req.file.filename;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};
