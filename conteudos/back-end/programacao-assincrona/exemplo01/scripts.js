const {getCityFromZipcode} = require("utils-playground");

// console.log('inicio');
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// console.log('fim');

// console.log("inicio");
//     getCityFromZipcode('08485130').then(cidade => {
//         console.log(cidade);
//     });

// console.log("fim");

const cidade =  getCityFromZipcode('08485130');

console.log(cidade);