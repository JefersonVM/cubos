

let valorDosProdutos = [11,5,6];

let soma = 0;
let menorPreco = valorDosProdutos[0];

for (let i = 0; i < valorDosProdutos.length; i++ ){

    soma += valorDosProdutos[i];

    if(menorPreco > valorDosProdutos[i] ){
        
        menorPreco = valorDosProdutos[i];

    }

}

    if(valorDosProdutos.length >= 5 ) {

              
        console.log(soma - menorPreco);
       
    }else {

        console.log(soma);


    }    
    
   









