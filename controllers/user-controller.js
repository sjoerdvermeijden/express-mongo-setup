const User = require("../models/user-model");

exports.getUsers = (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
};

exports.loginUser = (req, res) => {};

exports.registerUser = (req, res) => {};
