

//Declaração de função tradicional => Consigo utizar antes de declarar.

function soma(x, y){
    return x + y;
 }



 console.log(soma(5,3));





//Declaração de função usando arrow-function => Não consigo utilizar antes de declarar.

const soma = (x, y) => {

    return x * y;

}

console.log(soma(2,4));