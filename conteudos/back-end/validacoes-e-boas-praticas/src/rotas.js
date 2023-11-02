const express = require("express");
const { cadastrarUsuario, listarUsuarios } = require("./controllers/usuarios");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const schemaUsuario = require("./validacoes/schemaUsuario");

const rotas = express();

rotas.get("/usuario", listarUsuarios);

rotas.post(
  "/usuario",
  validarCorpoRequisicao(schemaUsuario),
  cadastrarUsuario
);


module.exports = rotas;
