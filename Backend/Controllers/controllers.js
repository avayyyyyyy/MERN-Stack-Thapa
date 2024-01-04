const User = require("../Models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateUser = require("../Validators/user-validator");

const HomeRoute = (req, res) => {
  res.send("Hello From Home");
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let UserFound = await User.findOne({ email });

    if (!UserFound) {
      res.json({ err: "invalid Credentials " });
    }

    let passCompared = await bcrypt.compare(password, UserFound.password);

    if (UserFound && passCompared) {
      let token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      res.json({ msg: "Login Successful", token });
    }
  } catch (error) {
    res.json({ err: "Invalid Credentials " });
  }
};

const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (await User.findOne({ email })) {
    res.json({ err: "user already exist, Please Login" });
  } else {
    let inserted = {
      username,
      email,
      phone,
      password,
    };
    let Validated = validateUser.safeParse(inserted);
    if (Validated.success === true) {
      let hashedPass = await bcrypt.hash(password, 10);
      let newInserted = await new User({
        username,
        email,
        phone,
        password: hashedPass,
      });
      await newInserted.save();

      let token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });

      res.json({ msg: "Signup successfull", token: token });
    } else {
      res.json({ err: "Invalid Credentials" });
    }
  }
};

module.exports = { HomeRoute, registerUser, loginUser };
