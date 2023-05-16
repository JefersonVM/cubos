const aluno = {
    nome: `Jeferson`,
    idade: 41,
    altura: 1.86,
    temCnh: true,
    apelidos: [`- Jeeh`, `- Glick`, `- Jefinho`]

};

let arrayApelidos = ``;

let cnh = aluno.temCnh ? `possui CNH` : `não possui CNH`;
 
for (let i = 0; i < aluno.apelidos.length; i++) {
    arrayApelidos += aluno.apelidos[i] + "\n";    
}


console.log(`${aluno.nome} tem ${aluno.idade} anos, ${aluno.altura}m de altura, ${cnh} e tem os seguintes apelidos: 
${arrayApelidos}`); 


