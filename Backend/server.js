require("dotenv").config();
const express = require("express");
const router = require("./Routes/auth-router");
const app = express();
const connectDB = require("./Config/ConnectDB");
const ErrorHandler = require("./Middleware/globalError");
const cors = require("cors");

connectDB();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(ErrorHandler);
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Server Started on http://localhost:3000"));
