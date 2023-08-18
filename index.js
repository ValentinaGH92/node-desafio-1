const read = require("./operations/leer");
const register = require("./operations/registrar");

const args = process.argv.slice(2);

const operation = args[0];

if (operation !== "registrar" || operation !== "leer") {
  console.log("operacion no encontrada unu");
  return;
}

if (operation === "registrar") {
  const name = args[1];
  const age = args[2];
  const animal = args[3];
  const color = args[4];
  const disease = args[5];

  register(name, age, animal, color, disease);
}

if (operation === "leer") {
  read();
}
