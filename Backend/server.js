const express = require("express");
const router = require("./Controllers/HomeRoute");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./Config/ConnectDB");

connectDB();

app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Server Started on http://localhost:3000"));
