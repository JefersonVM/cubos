const { usuarios } = require("../bancodedados");


const listarUsuarios = async (req, res) => {
  return res.status(200).json(usuarios);
};

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

 try {
  

 

  usuarios.push({ nome, email, senha });

  res.status(201).json("Usuário cadastrado com sucesso");
 } catch (error) {
  res.status(400).json(error.message);
 }
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
};
