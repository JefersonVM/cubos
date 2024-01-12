const teste = () => {
  console.log("teste");
};

const validarNome = () => {
  throw new Error("O nome precisa ter mais de 5 caracteres");
};

teste();

console.log(validarNome());
