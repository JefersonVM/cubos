const cadastro = (numero: string | number) => {

    if (typeof numero === "string") {
        console.log(numero.toUpperCase());
    } else if (typeof numero === "number") {
        console.log(numero.toFixed(2));
    }

}


cadastro('Jeferson');
cadastro(42);




    // numero.toUpperCase();

    // numero.toFixed();