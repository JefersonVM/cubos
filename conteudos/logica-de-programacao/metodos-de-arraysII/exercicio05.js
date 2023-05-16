const produtos = [

    {
        nome: `arroz`,
        preco: `500`

    },
    {
        nome: `carne`,
        preco: 3200
    },
    {
        nome: `biscoito`,
        preco: 450
    },
    {
        nome: `banana`,
        preco: 320
    }

];

const novoArray = produtos.map((produto) => {

    return {
        nome: `${produto.nome}`,
        preco: `${produto.preco}`,
        desconto: `${produto.preco / 100 * 10}`
    }
})

console.log(novoArray);