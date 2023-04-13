const nomeCorrompido = "*Jef!@#$%&*()e$rs#on@";
let nomePuruficado = ``;

for( let caracter  of nomeCorrompido){

   if (caracter === `!` || caracter === `@` || caracter === `#` || caracter === `$` || caracter === `%` || caracter === `&` || caracter === `*` || caracter === `(` || caracter === `)` || caracter === `.`){

   }else {
    nomePuruficado += caracter;
   }  

   }
   console.log(nomePuruficado);






