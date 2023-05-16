
const sequencia = [`<`];

let indice = 0;
    
   


for(let i = 0; i < sequencia.length; i++){
    
   
        
    if (sequencia[i] === `>`){
    
        indice += 1;
        
       
        
    }else if (sequencia[i] === `<`){
        
        indice -= 1;
    }
    
    if(indice < 0){
           
        indice = 6;
           
    }else if(indice > 6){
        
        indice = 0;    
    }
    
      

    
}
    console.log(indice);




