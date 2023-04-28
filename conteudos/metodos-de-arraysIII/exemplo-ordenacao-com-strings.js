

const pessoas = [
    `João`, `ana`, `carlos`, `beatriz`
];


//Ordenação crescente

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});


console.log(pessoas);

//Ordenação decrescente

pessoas.sort((a, b) => {

    return b.localeCompare(a);
})

console.log(pessoas);