const usuarios = [
    {
        id: 11,
        nome: `João`,
        idade: 23

    },
    {
        id: 2,
        nome: `Maria`,
        idade: 18
    },
    {
        id: 4,
        nome: `Ana`,
        idade: 30
    },
    {
        id: 1,
        nome: `Rodrigo`,
        idade: 17
    },
    {
        id: 123,
        nome: `Rodrigo`,
        idade: 50
    }
];

const maiorIdade = usuarios.reduce((acumulador, elemntoAtual) => {

    let maior = acumulador;

    if(elemntoAtual.idade > maior.idade){

        maior = elemntoAtual; 
    }

    return maior;

})

console.log(maiorIdade);
