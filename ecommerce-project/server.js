require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const { connectToDB } = require("./config/db");
const app = express();

connectToDB();

// Middleware
app.use(cors("*"));

app.use(express.json({ extended: false }));

app.use("/api/v1", routes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500);
  res.render("error", { error: err });
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
