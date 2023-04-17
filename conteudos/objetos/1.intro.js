const pessoa = {
    nome: `Jeferson`,
    altura: 1.86,
    peso: 86,
    idade: 41
};

console.log(`Nome: ${pessoa.nome}\nAltura: ${pessoa.altura}\nPeso: ${pessoa.peso}\nIdade: ${pessoa.idade}`);


//São a mesma coisa.
pessoa.nome;
pessoa ["nome"];