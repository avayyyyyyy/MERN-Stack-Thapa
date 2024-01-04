const express = require("express");
const {
  HomeRoute,
  registerUser,
  loginUser,
} = require("../Controllers/controllers");
const router = express.Router();

router.get("/", HomeRoute);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
