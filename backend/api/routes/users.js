var express = require("express");
var userModel = require("../models/user");
var router = express.Router();

/* GET users listing. */
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

router.post("/register", function (req, res, next) {
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
  });

  userDetails
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Inserted Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
