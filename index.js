const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js")
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Route
app.use("/api/products", productRoute )

app.get("/", (req, res) => {
  res.send("Hello worlds from asdasdf");
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

app.get("/", (req,res) => {
    res.send("Hello worlds from asdasdf");
})