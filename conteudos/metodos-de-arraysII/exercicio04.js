
const professores = [
    {
        nome: `Guido`,
        stack: `backend`
    },
    {
        nome: `Vidal`,
        stack: `backend`
    },
    {
        nome: `Dani`,
        stack: `frontend`
    },
    {
        nome: `Diego`,
        stack: `frantend`
    },
    {
        nome: `Léo`,
        stack: `backend`
    },
    {
        nome: `Ruli`,
        stack: `frontend`
    }
];

const backend = professores.filter((stack) => {

    return stack.stack === `backend`;

});


const frontend = professores.filter((stack) => {

    return stack.stack === `frontend`;

})


console.log(backend, frontend );
