
//Saber se um email é válido.
//Tem que ter pelo menos um @.
//Tem que ter pelo menos um ponto depois do @.


 const possivelEmail = `jeferson.vm1981@gmail.  com`;

const indexArroaba = possivelEmail.indexOf(`@`); //15

 const indexPonto = possivelEmail.indexOf(`.`, indexArroaba);

 if (indexPonto > indexArroaba){

    console.log(`Email atende as requisições`);

 }else {

    console.log(`Email não atende as requisições`);

 } 