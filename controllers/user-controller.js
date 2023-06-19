const User = require("../models/user-model");

exports.getUsers = (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
};

exports.registerUser = (req, res) => {};

exports.loginUser = (req, res) => {};
