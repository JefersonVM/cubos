
const array = [
    0, 1, 2, 3, 4 
];

//Como somar um array usando o for

// let soma = array[0];

// for(let i = 1; i < array.length; i++){

//     soma += i;

// }

// console.log(soma);

const valorDaSoma = array.reduce((acumulador, elementoAtual, indice, array) => {

    
    return acumulador + elementoAtual;


});

const valorDaSoma2 = array.reduce((acumulador, elementoAtual, indice, array) => {

    
    return acumulador + elementoAtual;


}, 20);

console.log(valorDaSoma);
console.log(valorDaSoma2);
