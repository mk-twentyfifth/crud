const moongose = require("mongoose");

const ProductSchema = moongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a Product Name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = moongose.model("Product", ProductSchema);

module.exports = Product;