const temIngresso = true;
const censura = 16;
const idade = 15;
const estaComOsPais = true;

if( temIngresso){

    if (idade >= censura || estaComOsPais){
        console.log(`Pode entrar!`);
    }else {
        console.log(`Barrados no baile!`);
    }


}else {
    console.log(`barrados no baile!`);
}