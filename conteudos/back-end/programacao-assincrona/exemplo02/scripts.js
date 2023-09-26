const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

// getCityFromZipcode("08485130")
//   .then((cidade) => {
//     console.log(cidade);
//     getStateFromZipcode("08485130").then((estado) => {
//         console.log(estado);
//       });
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// async / await
//   (async function(){
//    const cidade = await getCityFromZipcode('08485130');

//    console.log(cidade);

//    const estado = await getStateFromZipcode('08485130');

//    console.log(estado);
//   })();

// padrão normal 
// async function teste () {

//     return '123'

// }

// arrow function 

const teste = async () => {

}

console.log(teste());



// const cidade = getCityFromZipcode('08371350');

// console.log(cidade);
