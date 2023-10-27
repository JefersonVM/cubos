const { usuarios } = require("../bancodedados");

const listarUsuarios = async (req, res) => {
  return res.status(200).json(usuarios);
};

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  usuarios.push({ nome, email, senha });

  res.status(201).json("Usuário cadastrado com sucesso");
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
};
