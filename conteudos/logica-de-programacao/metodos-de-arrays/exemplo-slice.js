
const dados = [0, 1, 5, 7, 01, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

let porcentagemInicio = Math.round(dados.length * 10 / 100);
let porcentagemFinal = Math.floor(dados.length * 90 / 100);

function descartaDados(){

    oitentaPorCento = dados.slice(porcentagemInicio, porcentagemFinal); 

    console.log(oitentaPorCento);

}



descartaDados();