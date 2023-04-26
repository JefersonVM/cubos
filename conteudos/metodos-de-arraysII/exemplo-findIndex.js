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

const retorno = (nome, array) => {
        
    return array.findIndex((carro) => {

        return carro.nome === nome;

    }); 
};

console.log(retorno(`Uno`, carros));