const { response } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose
  .connect(
    "mongodb+srv://steveKim:ehxhfl80@react-blog.zqwi7.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB commected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello github");
});

app.listen(5000);
