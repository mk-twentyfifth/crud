const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello worlds from asdasdf");
});

mongoose
  .connect(
    "mongodb+srv://mk_admin:Ms8HsYOxURJXmYA6@backenddb.cqsbpjr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database successfully")
    app.listen(3000, ()=> {
        console.log("running on port 3000")
    })
})
  .catch(() => "connected to db error");
