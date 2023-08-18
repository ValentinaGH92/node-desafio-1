const fs = require("fs");
const path = require("path");

const citasFilePath = path.join(__dirname, "citas.json");

const read = () => {
  const data = JSON.parse(fs.readFileSync(citasFilePath, "utf8"));

  console.log(data);
};

module.exports = read;
