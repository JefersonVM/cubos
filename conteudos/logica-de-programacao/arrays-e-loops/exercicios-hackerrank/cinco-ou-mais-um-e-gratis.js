
const precos = [100, 500, 100, 200, 50];

  let total = 0;
  let menorNumero = precos[0];

    

for(let preco of precos){

    if (menorNumero > preco){

        menorNumero = preco
    }
}

    if(precos.length >= 5){
        
        for(let preco of precos){    

            total += preco;   
                              
                                       
        }

        total -= menorNumero; 
     
        
    }else {

        for(let preco of precos){    

            total += preco;
            
        }   
    
}

console.log(total);
