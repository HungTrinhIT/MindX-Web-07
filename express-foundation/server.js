const express = require("express");

const app = express();

const students = [
  {
    id: 1,
    name: "Khoa",
    school: "FPT",
    address: {
      street: "Hai Ba Trung",
      no: "01",
    },
    isActice: true,
  },
  {
    id: 2,
    name: "Phat",
    school: "Havard",
    address: {
      street: "Huynh Tan Phat",
      no: "01",
    },
    isActice: false,
  },
  {
    id: 3,
    name: "Ngoc",
    school: "FPT",
    address: {
      street: "Hai Ba Trung",
      no: "01",
    },
    isActice: true,
  },
];

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
