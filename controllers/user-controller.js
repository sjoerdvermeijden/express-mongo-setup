exports.getUsers = (req, res) => {
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
