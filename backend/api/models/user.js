const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://12002040701177:vvvv2407@cluster0.ix0fooh.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
      match:
        /[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

var userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
