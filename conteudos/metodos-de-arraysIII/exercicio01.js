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
        idade: 17
    }
];



console.log(usuarios);

usuarios.sort((a, b) => {

    return a.id - b.id;

});

console.log(usuarios);

usuarios.sort((a, b) => {

    return b.id - a.id;

})

console.log(usuarios);

