const knex = require("../conexao");

const listar = async (req, res) => {
  try {
    const usuarios = await knex("usuarios");
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obter = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await knex("usuarios").where({ id }).first();

    if (!usuario) {
      return res.status(404).json("Usuário não encontrado");
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrar = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome) {
    return res.status(404).json("O campo nome é obrigatório");
  }

  if (!email) {
    return res.status(404).json("O campo email é obrigatório");
  }

  if (!senha) {
    return res.status(404).json("O campo senha é obrigatório");
  }

  try {
    const usuario = await knex("usuarios").where({ email }).first();

    if (usuario) {
      return res.status(400).json("O email informado já foi cadastrado");
    }

    const usuarioCadastrado = await knex("usuarios").insert({
      nome,
      email,
      senha,
    });

    if (!usuarioCadastrado) {
      return res.status(400).json("O usuário não foi cadastrado");
    }

    return res.status(200).json("Usuário cadastrado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  if (!nome && !email && !senha) {
    return res.status(404).json("Informe ao menos um campo para atualizar");
  }

  try {
    const usuario = await knex("usuarios").where({ id }).first();

    if (!usuario) {
      return res.status(404).json("Usuário não encontrado");
    }

    if (email) {
      const usuarioComEmail = await knex("usuarios").where({ email }).first();

      if (usuarioComEmail) {
        return res.status(400).json("O email informado já foi cadastrado");
      }
    }

    const usuarioAtualizado = await knex("usuarios")
      .where({ id })
      .update({ nome, email, senha});

    if (!usuarioAtualizado) {
      return res.status(400).json("O usuário não foi atualizado");
    }

    return res.status(200).json("Usuário atualizado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluir = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await knex("usuarios").where({ id }).first();

    if (!usuario) {
      return res.status(404).json("Usuário não encontrado");
    }

    const usuarioExcluido = await knex("usuarios").where({ id }).del();

    if (!usuarioExcluido) {
      return res.status(400).json("O usuário não foi excluído");
    }

    return res.status(200).json("Usuário excluído com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listar,
  obter,
  cadastrar,
  atualizar,
  excluir,
};
