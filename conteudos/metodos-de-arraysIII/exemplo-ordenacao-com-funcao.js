

const numeros = [3, 20, 13, 50, 1, 4, 2, 13];


//Ordenação crescente

numeros.sort((a, b) => {

    if (a < b){

        return -1;
    }

    if (a > b){

        return 1;

    }

    return 0;


});

//Ordenação decrescente

console.log(numeros);

numeros.sort((a, b) => {

    if (a > b){

        return -1;
    }

    if (a < b){

        return 1;

    }

    return 0;


});

console.log(numeros);