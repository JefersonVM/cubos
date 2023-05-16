const pessoa = {
    nome: `Jeferson`,
    idade: 41,
    cidade: `São Paulo`,
    profissao: `Dev`

};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

//const {nome, idade} = pessoa;

const {nome, idade, ... outros} = pessoa;

console.log(nome, idade);
console.log(outros);
