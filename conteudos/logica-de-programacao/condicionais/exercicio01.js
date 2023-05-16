const valorDoProduto = 100;
const quantDeParcelas = 3;
const desconto = valorDoProduto * 0.1;

if (quantDeParcelas === 1){
    //à vista - com 10% de desconto.
    console.log(`Você deve pagar R$${(valorDoProduto - desconto).toFixed(2)}`);

}else {
    //parcelado
    console.log(`Você vai pagar ${quantDeParcelas} parcelas de R$ ${(valorDoProduto / quantDeParcelas).toFixed(2)}.`);

}