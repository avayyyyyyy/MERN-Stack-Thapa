const express = require("express");
const { HomeRoute } = require("../Controllers/HomeRoute");
const router = express.Router();

router.get("/home", HomeRoute);

module.exports = router;
