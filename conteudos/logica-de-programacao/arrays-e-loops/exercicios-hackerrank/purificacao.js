

const stringCorrompida = (`Je!@#fer%*&son Vie*&%ra More!@ra`);

let stringPurificada = ``;

for (let letra of stringCorrompida){
        
    if (letra !== `!` && letra !== `@` && letra !== `#` && letra !== `$` && letra !== `%` && letra !== `&` && letra !== `*` && letra !== `(` && letra !== `)` && letra !== `.`){
        
        stringPurificada += letra
        
        }
    
}
console.log(stringPurificada);
















