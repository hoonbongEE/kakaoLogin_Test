const express = require("express");
const passport = require("passport");
const { isLoggedIn, isNotLoggeIn } = require("../middlewares");
const { join, login, logout } = require("../controllers/auth");
const router = express.Router();

router.post("./join", isNotLoggeIn, join);

router.post("./login", isNotLoggeIn, login);

router.post("/logout", isLoggedIn, logout);

module.exports = router;
