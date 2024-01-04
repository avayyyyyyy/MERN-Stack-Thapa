const express = require("express");
const User = require("../Models/user-model");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From Home");
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    let inserted = await new User({
      username,
      email,
      phone,
      password,
    });
    await inserted.save();
    res.json({ msg: "Data inserted successfully" });
  } catch (e) {
    res.json({ err: "Insert Correct and Unique Data " });
  }
});

module.exports = router;
