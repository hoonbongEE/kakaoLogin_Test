const express = require("express");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares"); // 이름 수정
const { join, login, logout } = require("../controllers/auth");
const router = express.Router();

router.post("/join", isNotLoggedIn, join); // 경로 수정

router.post("/login", isNotLoggedIn, login); // 경로 수정

router.post("/logout", isLoggedIn, logout);

module.exports = router;
