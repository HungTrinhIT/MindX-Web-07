const express = require("express");
const cors = require("cors");

const studentRouter = require("./routes/Student");
const teacherRouter = require("./routes/Teacher");

const app = express();

app.use(express.json());
app.use(cors("*"));

// Routes
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.get("/", (req, res) => {
  res.send("Hello welcome to our API");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
