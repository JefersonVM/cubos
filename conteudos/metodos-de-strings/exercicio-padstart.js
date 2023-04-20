function imprimir(dia, mes, ano) {

    let diaFormatado = String(dia).padStart(2, `0`);
    let mesFormatado = String(mes).padStart(2, `0`);
    let anoFormatado = String(ano).padStart(2, `0`);

    console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`);
    

};

imprimir(24,04,2023)

