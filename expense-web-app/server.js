require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to Expense App API");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
