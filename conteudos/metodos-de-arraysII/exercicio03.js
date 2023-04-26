const carros = [
    {
        nome: `Ka`,
        marca: `Ford`,
        ano: 2019,
        cor: `Prata`
    },
    {
        nome: `Uno`,
        marca: `Fiat`,
        ano: 2010,
        cor: `Preta`
    },
    {
        nome: `Gol`,
        marca: `Volkswagen`,
        ano: 2015,
        cor:`Azul`
    },
    {
        nome: `Gol`,
        marca: `Volkswagen`,
        ano: 2016,
        cor:`Azul`
    },
    
];




const retornarCarro = (nome, array) => {

    return array.find((carro) => {

        return carro.nome === nome;

    });

}
console.log(retornarCarro(`Gol`,carros));


