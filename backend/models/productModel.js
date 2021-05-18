import mongoose from "mongoose";
import { User } from "./userModel.js";


const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, {
  timestamps : true,
})


const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },

    material: {
      type: String,
      required: true,
      default: 0,
    },
    design: {
      type: String,
      required: true,
      default: 0,
    },
    bottomLength: {
      type: Number,
      required: true,
      default: 0,
    },
    duppataLength: {
      type: Number,
      required: true,
      default: 0,
    },
    topLength: {
      type: Number,
      required: true,
      default: 0,
    },
    // admin name login se pta kr lenge
    // adminName: {
    //   type: String,
    //   required: true,
    //  // ref: "User",
    // },
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // reviews: [reviewSchema],
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('product', productSchema);

export default Product;
