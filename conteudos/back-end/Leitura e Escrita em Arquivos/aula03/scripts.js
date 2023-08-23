const fs = require("fs/promises");

(async function () {
  const arquivoJson = await fs.readFile("teste.json");

  const pessoas = JSON.parse(arquivoJson);

  pessoas.push({
    nome: "Quem é você?",
    idade: "Não importa",
  });

  const arrayJson = JSON.stringify(pessoas);

  console.log(pessoas);

  console.log("Intervalo");

  console.log(arrayJson);
})();
