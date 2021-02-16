const { response } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/user");

mongoose
  .connect(
    "mongodb+srv://steveKim:ehxhfl80@react-blog.zqwi7.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB commected"))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json({ "hello~": "hi!!!" });
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ seccess: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(5000);
