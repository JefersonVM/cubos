const finalDaCopa = new Date(2002, 5, 30, 8);
const finalMaisUmaHora = +finalDaCopa + 1000*60*60;
const maisUmaHoraDate = new Date(finalMaisUmaHora);

console.log(maisUmaHoraDate);