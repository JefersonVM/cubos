

const numeros = [3, 20, 13, 50, 1, 4, 2, 13];


//Ordenação crescente

numeros.sort((a, b) => {

    return a - b;

});

//Ordenação decrescente

console.log(numeros);

numeros.sort((a, b) => {

    return b - a;
    


});

console.log(numeros);