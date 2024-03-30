var express = require("express");
var userModel = require("../models/user");
var router = express.Router();
const bcrypt = require("bcrypt");

/* GET users listing. */
function checkEmail(req, res, next) {
  var email = req.body.Email;
  var checkexitemail = userModel.findOne({ email: email });
  checkexitemail
    .exec() // Remove the callback function
    .then((data) => {
      if (data) {
        return res.status(200).json({
          msg: "Email Already Exists",
          results: data,
        });
      }
      next(); // Move to the next middleware/route handler
    })
    .catch((err) => {
      console.error("Error checking email:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
}

router.get("/", function (req, res, next) {
  // Create a new user document with the provided details
  var userDetails = new userModel({
    name: "prapti",
    email: "prapti@gmail.com",
    password: "password@123",
  });

  // Save the user details to the database
  userDetails
    .save()
    .then((savedUser) => {
      console.log("User data inserted successfully:", savedUser);
      res.render("index", { title: "Users Data Inserted" });
    })
    .catch((err) => {
      console.error("Error saving user:", err);
      res.status(500).send("Error inserting user data");
    });
});

router.post("/register", checkEmail, function (req, res, next) {
  const password = req.body.Password;

  // Check if password is provided
  if (!password) {
    return res.status(400).json({
      msg: "Password is required",
    });
  }

  bcrypt.hash(req.body.Password, 10, function (err, hash) {
    if (err) {
      console.error("Error hashing the password:", err);
      return res.status(400).json({
        msg: "Error hashing the password",
        error: err,
      });
    }

    var userDetails = new userModel({
      name: req.body.Name,
      email: req.body.Email,
      password: hash,
    });

    userDetails
      .save()
      .then((resResult) => {
        res.status(201).json({
          msg: "User Created Successfully",
          results: resResult,
        });
      })
      .catch((err) => {
        // Handle other errors when saving user details
        return res.status(500).json({
          msg: "Failed to save user details!",
          error: err,
        });
      });
  });
});

router.post("/login", function (req, res, next) {
  var email = req.body.Email;
  userModel
    .find({ email: email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        res.status(200).json({
          msg: "Auth Failed",
          UserData: "",
          status: "error",
        });
      } else {
        bcrypt.compare(
          req.body.Password,
          user[0].password,
          function (err, result) {
            if (err) {
              res.json({
                msg: "Auth Failed",
                UserData: "",
                status: "error",
              });
            }
            if (result) {
              res.status(200).json({
                msg: "User Login Successfully",
                UserData: user,
                status: "success",
              });
            } else {
              res.json({
                msg: "Auth Failed",
                UserData: "",
                status: "error",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});

module.exports = router;
