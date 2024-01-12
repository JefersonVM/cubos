let algumaCoisa: number | string | boolean;

algumaCoisa = 10;
algumaCoisa = 'Jeferson';
algumaCoisa = true;

const cadastroUsuarios = (usuarios: {nome: string} | {nome: string}[]) => {
    return usuarios;
}

const usuario = {
    nome: 'Jeferson'
}

const usuarios = [
    {
        nome: 'Jeferson'
    },
    {
        nome: 'Lima'
    },
    {
        nome: 'Santos'
    }
];

console.log(cadastroUsuarios(usuario));
console.log(cadastroUsuarios(usuarios));