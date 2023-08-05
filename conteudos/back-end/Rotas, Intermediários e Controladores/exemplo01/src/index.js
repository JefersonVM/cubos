const express = require("express");

const {
  filtrarProfessores,
  encontrarUmProfessor,
} = require("./controladores/professores");

const app = express();

const primeiroIntermediario = (req, res, next) => {
  console.log("Passei no primeiro intermediário");

  next();
}

const segundoIntermediario = (req, res, next) => {
  console.log("Passei no segundo intermediário");

  next();
}

const intermediarioDaRota = (req, res, next) => {
  console.log("Passei no intermediário da rota");

  next();
}

app.use(primeiroIntermediario);
app.use(segundoIntermediario);

//localhost:3001/professores
app.get("/professores", intermediarioDaRota, filtrarProfessores);

//localhost:3001/professores/:id
app.get("/professores/:id", encontrarUmProfessor);

app.listen(3001);
