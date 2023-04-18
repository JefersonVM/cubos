const pessoaObj = {
    nome: `Jeferson`,
    idade: 41,
    profissao: `Dev`,
    altura: 1.86
};

function apresentar(pessoa) {

    console.log(`Olá! meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
};

apresentar(pessoaObj);