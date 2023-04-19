
const pessoa1 = {

    nome: `João`,
    idade: 12,
    altura: 1.4,
    profissao: `Marceneiro`,
    apresentar: function () {      
       
        const faixaEtaria = this.determinarFaixaEtaria(this.idade)

        console.log(`Olá! Meu nome  é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`);  

    },
    determinarFaixaEtaria: function () {

        if (this.idade < 25){

            return `jovem`;
    
        }else if (this.idade < 65){
    
            return `adulto(a)`;
    
        }else {
    
            return `idoso(a)`;
        }


    }

}
pessoa1.apresentar();
console.log(pessoa1.determinarFaixaEtaria());






