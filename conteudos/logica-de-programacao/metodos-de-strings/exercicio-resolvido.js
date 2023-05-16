const nome = `jeferson vieira moreira`;

const arrayNomes = nome.split(` `);


let nomeFormatado = ``;

for( let item of arrayNomes){

    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);


    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + ` `;


}

console.log(nomeFormatado.trim());



