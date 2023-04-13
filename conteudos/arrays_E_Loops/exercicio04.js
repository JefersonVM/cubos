const palavra = `Abracadabra`;
let cont = 0;
for ( let letra  of palavra){

    if(letra === `a` || letra === `A` || letra === `ã` ){
        cont ++;
    }
  

}
console.log(cont);

