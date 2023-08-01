const {uniq} = require('lodash');
const {arrayNumeros, arrayLetras} = require('./array')

console.log(arrayNumeros);
console.log(arrayLetras);

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayLetraUnica);
console.log(arrayNumeroUnico);