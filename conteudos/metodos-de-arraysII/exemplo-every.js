
const frutas = [`Abacaxi`, `Manga`, `Melancia`, `Banana`];
const numeros = [1, 2, 3, 4, 5]

// const resultado = frutas.every((fruta) => {

//     return fruta !== `Banana`;

// });

const resultado = numeros.every((numero) => {

    return numero < 5;
})

console.log(resultado);