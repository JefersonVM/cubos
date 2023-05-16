
function determinarFaixaEtaria(idade){

    if(idade <= 21){

        return `Jovem`;
    }else if (idade <= 65){
        return `Adulto(a)`;
    }else {
        return `Idoso(a)`
    }

};

console.log(determinarFaixaEtaria(65));