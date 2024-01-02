const express = require("express");
// const { router } = require("./Routes/auth-router");
const app = express();  

app.get("/", (req, res) => {
  res.send("Hii From Sever!");
});
app.get("/about", (req, res) => {
  res.send("Hii From About!");
});

app.listen(3000, () => console.log("Server Started on http://localhost:3000"));
