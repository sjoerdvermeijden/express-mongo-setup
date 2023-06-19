const express = require("express");
const router = express.Router();

const { getUsers, loginUser } = require("../controllers/user-controller");

router.get("/", getUsers);
router.get("/login", loginUser);

module.exports = router;
