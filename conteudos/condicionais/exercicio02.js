const valorDoProduto = 100;
const quantDeParcelas = 12;
const desconto = valorDoProduto * 0.1;
const montante = valorDoProduto * (1 + 1.01) ** quantDeParcelas;

if (quantDeParcelas === 1){
    //à vista - com 10% de desconto.
    console.log(`Você deve pagar R$ ${(valorDoProduto - desconto).toFixed(2)}`);

}else  if (quantDeParcelas >= 7 &&  quantDeParcelas <= 12){
    //parcelado com juros
    console.log(`Você vai pagar R$ ${quantDeParcelas} parcelas de ${((valorDoProduto / quantDeParcelas + montante / quantDeParcelas)).toFixed(2)}`);
}else if (quantDeParcelas >= 2 && quantDeParcelas <= 6) {
    //parcelado sem juros
    console.log(`Você vai pagar ${quantDeParcelas} parcelas de R$ ${(valorDoProduto / quantDeParcelas).toFixed(2)}.`);
   
}else {
    console.log(`Quantidade de parcelas inválida!`);
}