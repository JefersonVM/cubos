const nomes = [`Jeferson`, `Marcio`, `Ronaldo`, `Daniel`];
const numeros = [1, 5, 9, 7];

const resultado = numeros.some((numero) => {

    return numero % 2 === 0;

});

console.log(resultado);