
const cartaoCliente = {

    nomeDoCliente: "Jeferson",
    idadeDoCliente: 41,
    produtosConsumidos: [
        {
            nome: `Arroz`,
            precoUni: 20.53,
            qtd: 2
        },
        {
            nome: `Feijão`,
            precoUni: 14.28,
            qtd: 2
        },
        {
            nome: `Macarrão`,
            precoUni: 10.90,
            qtd: 2,

        }
    ]
};


console.log(cartaoCliente.nomeDoCliente);
console.log(cartaoCliente.idadeDoCliente);
cartaoCliente.idadeDoCliente = 42;
console.log(cartaoCliente.idadeDoCliente);
console.log(cartaoCliente.produtosConsumidos[0].nome);
console.log(cartaoCliente.produtosConsumidos[cartaoCliente.produtosConsumidos.length - 1].precoUni);
