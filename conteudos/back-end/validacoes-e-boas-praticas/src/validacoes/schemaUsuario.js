const joi = require("joi");

const schemaUsuario = joi.object({
  nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome não pode ser vazio",
  }),
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório",
    "string.email": "O campo email deve ser um email válido",
    "string.empty": "O campo email não pode ser vazio",
  }),
  senha: joi.string().min(5).required().messages({
    "any.required": "O campo senha é obrigatório",
    "string.min": "O campo senha deve ter pelo menos 5 caracteres",
    "string.empty": "O campo senha não pode ser vazio",
  }),
  idade: joi.number().integer().min(18).required().messages({
    "any.required": "O campo idade é obrigatório",
    "number.integer": "O campo idade deve ser um número inteiro",
    "number.min": "O campo idade deve ser maior ou igual a 18",
    "string.empty": "O campo idade não pode ser vazio",
  }),
  ativo: joi.boolean().required().messages({
    "any.required": "O campo ativo é obrigatório",
    "boolean.base": "O campo ativo deve ser um booleano",
    "string.empty": "O campo ativo não pode ser vazio",
  }),
});

module.exports = schemaUsuario;
