const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello worlds from asdasdf");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products) 
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.get("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params
    const products = await Product.findById(id)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    console.log(req.body);
    res.send(req.body);
  }
});

mongoose
  .connect(
    "mongodb+srv://mk_admin:Ms8HsYOxURJXmYA6@backenddb.cqsbpjr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(3000, () => {
      console.log("running on port 3000");
    });
  })
  .catch(() => "connected to db error");
