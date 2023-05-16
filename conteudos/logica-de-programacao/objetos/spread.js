const pessoa = {
    nome: `Jeferson`,
    idade: 41,
    cidade: `São Paulo`,
    profissao: `Dev`

};

const endereco = {
    rua: `Dona Eloá do valle Quadros`,
    numero: 813,
    complemento: `Apto 32 Bloco B`,
    bairro: `Santa Etelvina II`
}

const objetoFundido = {
    ... pessoa,
    ... endereco,
    novaPropriedade: 20
};

console.log(objetoFundido);