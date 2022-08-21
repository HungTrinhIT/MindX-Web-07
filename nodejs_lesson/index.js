const http = require("http");
const fs = require("fs");

const PORT = 3001;

const parseData = () => {
  fs.readFile("./mindx.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      throw error;
      return;
    }
    const students = data.trim().split("\n");
    const result = students.map((student) => {
      const studentElement = student.trim().split(",");
      return {
        name: studentElement[0],
        jobTitle: studentElement[1],
        age: studentElement[2],
        address: studentElement[3],
      };
    });
    return result;
  });
};

console.log(parseData());

// const requestListener = async function (req, res) {
//   const data = await parseData();
//   console.log(data);
//   res.writeHead(200);
//   res.end(JSON.stringify(data));
// };

// const server = http.createServer(requestListener);
// server.listen(PORT, "localhost", function () {
//   console.log("Server is Listening at Port 3001");
// });
