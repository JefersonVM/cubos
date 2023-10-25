const express = require("express");
const usuarios = require("./controllers/usuarios");
const login = require("./controllers/login");
const verificaLogin = require("./filtros/verificaLogin");
const postagens = require("./controllers/postagens");

const rotas = express();

// cadastro de usuário
rotas.post("/cadastro", usuarios.cadastrarUsuario);

// login
rotas.post("/login", login.login);

// filtro para verificar se o usuário está logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuário logado
rotas.get("/perfil", usuarios.obterPerfil);
rotas.put("/perfil", usuarios.atualizarPerfil);

// postagens
rotas.post("/postagens", postagens.novaPostagem);
rotas.get("/postagens", postagens.feed);
rotas.post("/postagens/:postagemId/curtir", postagens.curtir);
rotas.post("/postagens/:postagemId/comentar", postagens.comentar);

module.exports = rotas;
