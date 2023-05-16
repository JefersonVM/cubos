const arquivos = [`aula01.txt`, `aula02.txt`, `aula03.txt`, `aula04.txt`];



const antvirus = (arquivos) => {

    retorno = arquivos.some((arquivo) => {

        const existeExtensao = arquivo.indexOf(`.bat`)

        return existeExtensao !== -1;
    
    });

    if(retorno){
        console.log(`Virus detectado!`);
    }else {
        console.log(`Nenhum vírus encontrado!`);
    } 
    
}

antvirus(arquivos);





