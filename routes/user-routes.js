const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([
    {
      id: 0,
      name: "Sjoerd",
    },
    {
      id: 1,
      name: "Tom",
    },
  ]);
});

module.exports = router;
