
const cartaoCliente = {

    nomeDoCliente: "Jeferson",
    idadeDoCliente: 41,
    produtosConsumidos: [
        {
            nome: `Arroz`,
            precoUni: 2053,
            qtd: 2
        },
        {
            nome: `Feijão`,
            precoUni: 1428,
            qtd: 2
        },
        {
            nome: `Macarrão`,
            precoUni: 1090,
            qtd: 2,

        }
    ]
};

let soma = 0;

for(let i = 0; i < cartaoCliente.produtosConsumidos.length; i++){

    soma += cartaoCliente.produtosConsumidos[i].precoUni * cartaoCliente.produtosConsumidos[i].qtd; 

}

let somaFormatado = (soma / 100).toFixed(2);

console.log(`Olá ${cartaoCliente.nomeDoCliente}, o valor da fatura do cartão é de R$ ${somaFormatado}.`);