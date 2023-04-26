

const usuarios = [
    {
        nome: `João`,
        idade: 23
    },
    {
        nome: `Maria`,
        idade: 18
    },
    {
        nome: `Ana`,
        idade: 30
    },
    {
        nome: `Rodrigo`,
        idade: 17
    }

];

const nomes = [`João`, `Ana`, `José`];

// const resultado = usuarios.find((usuario) => {

//     return usuario.nome === `João`;

// });

const resultado = nomes.find((nome) => {

    return nome === `João`;

})

console.log(resultado);
    
