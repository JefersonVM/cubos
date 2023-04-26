const usuarios = [
   { 
    nome: `Jeferson`,
    idade: 42
   },
   {
    nome: `Rodrigo`,
    idade: 29
   },
   {
    nome: `Barbara`,
    idade: 16
   },
   {
    nome: `Marcelo`,
    idade: 27
   }
];



const fiscalizarIdade = (arrayObjetos) =>{

    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if(resultado){

        console.log(`Festa liberada!`);

    }else {
        console.log(`Possui menor de idade!`);
    }

}

fiscalizarIdade(usuarios);