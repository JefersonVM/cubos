const validarCorpoRequisicao = (arrayPropriedades) => (req, res, next) => {
  for (const propriedade of arrayPropriedades) {
    if (!req.body[propriedade]) {
      return res.status(400).json(`O campo ${propriedade} é obrigatório`);
    }
  }
  next();
};

module.exports = validarCorpoRequisicao;
