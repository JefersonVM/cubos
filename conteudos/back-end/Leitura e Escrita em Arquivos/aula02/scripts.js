const fsPromises = require("fs/promises");
const fs = require("fs");

console.log("antes de ler");

//const a = fsPromises.readFile("a.txt");

// a.then((data) => {
//   console.log(data.toString());
// });

// a.catch((erro) => {
//   console.log(erro);
// });

(async function () {
  const a = await fsPromises.readFile("a.txt");
  console.log(a.toString());
})();

console.log("depois de ler");
