const User = require("../models/user-model");

exports.getUsers = (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
};

exports.loginUser = (req, res) => {
  res.send([
    {
      id: 0,
      name: "Sjoerd Vermeijden",
    },
    {
      id: 1,
      name: "Tom Vermeulen",
    },
  ]);
};
