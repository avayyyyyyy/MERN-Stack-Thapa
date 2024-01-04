const User = require("../Models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateUser = require("../Validators/user-validator");
const messageValidate = require("../Validators/contact-message-validator");
const Contact = require("../Models/contactSchema");

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
      res.status(200).json({ msg: "Login Successful", token });
    }
  } catch (error) {
    res.status(400).json({ err: "Invalid Credentials " });
  }
};

const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;
  console.log(username, email, phone, password);

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

      let id = await newInserted["_id"].toString();

      let token = jwt.sign({ email, id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });

      res.status(201).json({ msg: "Signup successfull", token: token });
    } else {
      res.json({ err: "Invalid Credentials" });
    }
  }
};

const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    let inserted = {
      username,
      email,
      message,
    };
    let isMessageValidated = messageValidate.safeParse(inserted);

    if (isMessageValidated.success === true) {
      let inserted = await new Contact({
        username,
        email,
        message,
      });
      inserted.save();
      res.json({ msg: "Message Sent Successfullys" });
    }
  } catch (error) {
    res.status(401).json({ err: "Error encounter while sendig message " });
  }
};

module.exports = { HomeRoute, registerUser, loginUser, contactForm };
