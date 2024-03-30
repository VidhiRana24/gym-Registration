const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://12002040701177:vvvv2407@cluster0.ix0fooh.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

var userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
