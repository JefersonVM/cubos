

const array = [
    0, 1, 2, 3, 4 
];

const valorDaSoma = array.reduce((acumulador, elementoAtual, indice, array) => {

    
    acumulador += elementoAtual;

    return acumulador; 


});

console.log(valorDaSoma);