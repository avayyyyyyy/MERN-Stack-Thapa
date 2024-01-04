const express = require("express");
const router = express.Router();
const {
  HomeRoute,
  registerUser,
  loginUser,
  contactForm,
} = require("../Controllers/controllers");

router.get("/", HomeRoute);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/contact", contactForm);

module.exports = router;
