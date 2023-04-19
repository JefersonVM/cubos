
function verificarFaxaEtaria(idade){

    if (idade < 25){

        return `jovem`;

    }else if (idade < 65){

        return `adulto(a)`;

    }else {

        return `idoso(a)`
    }
}

function apresentar(pessoa){
    
       return `Olá! Meu nome  é ${pessoa.nome}, sou um ${verificarFaxaEtaria(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`;    

}

const pessoa1 = {
    nome: `João`,
    idade: 12,
    altura: 1.4,
    profissao: `Marceneiro`

}

const pessoa2 = {
    nome: `André`,
    idade: 26,
    altura: 1.80,
    profissao: `Estudante`
}

console.log(apresentar(pessoa2));

