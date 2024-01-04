require("dotenv").config();
const express = require("express");
const router = require("./Routes/auth-router");
const app = express();
const connectDB = require("./Config/ConnectDB");
const globalError = require("./Middleware/globalError");

connectDB();

app.use(globalError);
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Server Started on http://localhost:3000"));
