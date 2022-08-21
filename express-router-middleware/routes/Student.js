const express = require("express");

const router = express.Router();

let students = [
  {
    id: "1",
    fullname: "Phat Truong",
    skill: "ReactJS, cooking, sports",
  },
  {
    id: "2",
    fullname: "Khoa Truong",
    skills: "Football, sports",
  },
  {
    id: "3",
    fullname: "Ngoc",
    skills: "UI/UX, Frontend",
  },
];

router.get("/", (req, res) => {
  const query = req.query;
  console.log({ query });
  res.json({
    data: students,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  let findedStudent = null;

  for (let student of students) {
    if (student.id === id) {
      findedStudent = student;
      break;
    }
  }

  if (!findedStudent) {
    return res.json({
      msg: "Student does not exist in our platform",
    });
  }

  res.json({
    data: findedStudent,
  });
});

router.post("/", (req, res) => {
  // Step 1: Lay object new student tu req body
  const newStudent = req.body;
  const { skill, fullname } = newStudent;

  if (!skill || !fullname) {
    return res.json({
      msg: "Missing fields",
    });
  }

  // Step 2: Gen 1 cai id
  newStudent.id = students.length + 1 + "";

  // Step 3: them vao database
  students.push(newStudent);

  res.status(201).json({
    msg: "Student added successfully",
    data: students,
  });
});

router.put("/:id", (req, res) => {
  const updatedData = req.body;
  const id = req.params.id;

  const idx = students.findIndex((student) => student.id === id);

  if (idx === -1) {
    return res.json({
      msg: "Student does not exist",
    });
  }

  students[idx] = updatedData;

  res.json({
    msg: "Student updated successfully",
    data: students,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const idx = students.findIndex((student) => student.id === id);
  if (idx === -1) {
    return res.json({
      msg: "Student does not exist ",
    });
  }

  const filtedStudent = students.filter((student) => student.id !== id);
  students = filtedStudent;

  res.json({
    msg: "Delete student successfully",
    data: students,
  });
});

module.exports = router;
