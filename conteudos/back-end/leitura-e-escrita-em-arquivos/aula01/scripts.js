const fs = require('fs');

console.log('ante de ler');

// leitura de arquivos síncrono
//const a = fs.readFileSync('a.txt').toString();

//console.log(a);

fs.readFile('a.txt', (erro, data) => {

    if(erro){

        console.log(erro);

    }else {
        console.log(data.toString());
    }

});



console.log('depois de ler');