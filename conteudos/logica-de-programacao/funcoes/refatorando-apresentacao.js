

function calcularFaixaEtaria (pessoa){

    if(pessoa.idade < 25){

        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}\n.`);

    }else if (pessoa.idade < 65){

        console.log(`Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}\n.`);

    }else {
        
        console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}\n.`);
    }

}



const pessoa1 = {
    nome: `Jeferson`,
    idade: 41,
    profissao: `Dev`
}
calcularFaixaEtaria(pessoa1)


const pessoa2 = {
    nome: `Pedro`,
    idade: 45,
    profissao: `Motoca`
}
calcularFaixaEtaria(pessoa2)

const pessoa3 = {
    nome: `Larissa`,
    idade: 26,
    profissao: `Estudante`
}
calcularFaixaEtaria(pessoa3)









