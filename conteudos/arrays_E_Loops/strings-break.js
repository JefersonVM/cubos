const palavra = `Alemanha`;

let detectado = false;

for( let letra of palavra){
    if (letra === `h` || letra === `H` ){
      console.log(`Tem a letra h ou H.`)
      detectado = true;
      break;
    }


}
if (!detectado) {
    console.log(`Não tem a letra h ou H`);
}



