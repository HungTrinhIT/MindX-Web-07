const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors("*"));

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

app.get("/students", (req, res) => {
  const query = req.query;
  console.log({ query });
  res.json({
    data: students,
  });
});

app.get("/students/:id", (req, res) => {
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

app.post("/students", (req, res) => {
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

app.put("/students/:id", (req, res) => {
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

app.delete("/students/:id", (req, res) => {
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

// End student API

app.get("/", (req, res) => {
  res.send("Hello welcome to our API");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
  ** BaseURL: http://localhost:3001/api/

    API endpoint design 
  - Get list students:  GET     baseURL/students
  - Get a student:      GET     baseURL/students/:id
  - Add a new student:  POST    baseURL/students 
  - Update student:     PUT     baseURL/students/:id
  - Delete student:     DELETE  baseURL/students/:id

  - Different between PUT and PATCH

  HTTP method     ----     API behaviour
    GET                        Read
    POST                       Create
    DELETE                     Delete
    PUT/PATCH                  Update

  Request  
    Body
    Params
    Query 

  Design system
  Database design
  Devops: deployment, load balancer 
  DDOS: 

*/

/*
    HTML : Hypertext Markup Language
    CSS  : Cascading Stylesheet
    JSX  : Javascript XML
    props: property
    cors : cross-origin resource sharing
    http : hypertext transfer protocol
    https: 
    www  : world wide web
    tcp: 
    dcp:
*/
