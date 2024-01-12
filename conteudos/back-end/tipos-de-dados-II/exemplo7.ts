type Usuario = {
    nome: string;
    idade: number;
    email: Email;
    cpf: string;
    endereco: Endereco;
    };

type Email = string;

type Endereco = {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
};

const cadastro = (info: Usuario) => {

};
