
// setInterval(() => {
//    console.log(`Cubos Academy`); 
// }, 5000);

// const imprimir = () => {

//     console.log(`Cubos Academy melhor escola de programação!`);
//     clearInterval(interval);
// }

// const interval = setInterval(imprimir, 2000);

// let numero = 0;

// const contador = setInterval(function () {
//     console.log(numero);


//     numero++;
// }, 1000)

let numero = 10;

const contador = setInterval(function () {
    console.log(numero);
    numero--;

    if(numero === -1){
        console.log(`BOOOOMMMMMMMMMM!!!!!!!`);
        clearInterval(contador);
    }

   

}, 1000)




