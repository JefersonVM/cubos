const express = require("express");
const { cadastrarUsuario, listarUsuarios } = require("./controllers/usuarios");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");

const rotas = express();

rotas.get("/usuario", listarUsuarios);
rotas.post(
  "/usuario",
  validarCorpoRequisicao(["nome", "email", "senha"]),
  cadastrarUsuario
);

module.exports = rotas;
