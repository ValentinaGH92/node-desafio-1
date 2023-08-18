const fs = require("fs");
const path = require("path");

// C:\Users\valen\OneDrive\Documentos\desafios\node\desafio 1\operations\citas.json
const citasFilePath = path.join(__dirname, "citas.json");

const register = (name, age, animal, color, disease) => {
  const newDate = {
    nombre: name,
    edad: age,
    animal,
    color,
    enfermedad: disease,
  };

  const data = JSON.parse(fs.readFileSync(citasFilePath, "utf8"));

  data.push(newDate);

  fs.writeFileSync(citasFilePath, JSON.stringify(data), "utf8");

  console.log("dato agregado correctamente");
};

module.exports = register;
