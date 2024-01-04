const express = require("express");
const { HomeRoute, registerUser } = require("../Controllers/controllers");
const router = express.Router();

router.get("/", HomeRoute);

router.post("/register", registerUser);

module.exports = router;
