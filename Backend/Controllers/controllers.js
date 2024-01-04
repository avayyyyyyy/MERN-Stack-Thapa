const express = require("express");
const User = require("../Models/user-model");
const bcrypt = require("bcrypt");
const HomeRoute = (req, res) => {
  res.send("Hello From Home");
};

const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (await User.findOne({ email })) {
    res.json({ err: "user already exist" });
  } else {
    let hashedPass = await bcrypt.hash(password, 10);
    let inserted = await new User({
      username,
      email,
      phone,
      password: hashedPass ,
    });
    await inserted.save();
    res.json({ msg: "Data inserted successfully" });
  }
};

module.exports = { HomeRoute, registerUser };
