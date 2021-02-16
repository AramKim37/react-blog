const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },

  email: {
    type: String,
    trim: true,
    unique: 1,
  },

  password: {
    type: String,
    minlength: 5,
  },

  lastname: {
    type: String,
    maxlength: 50,
  },

  role: {
    type: number,
    default: 0,
  },

  token: {
    type: String,
  },

  tokenExp: {
    type: number,
  },
});

const User = mongoose.model("User", userSchema);

module.export = { User };
