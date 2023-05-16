



function inverter(nome) {

      const arrayNome =  nome.split(``);
      arrayNome.reverse();

      let nomeInvertido = ``;

      for(let letra of arrayNome){

        nomeInvertido += letra;
      }

      console.log(nomeInvertido);   

}

inverter(`Jeferson`);

