const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected sucessfully!");
  } catch (e) {
    console.log("DB Not Connected Successfully");
  }
};

module.exports = connectDB;
