const valorDaCompra = 100;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar R$ ${valorAPagar}, pois à vista tem 10% de desconto`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado sem juros
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar em ${numeroDeParcelas.toFixed(2)}x sem juros de R$ ${valorDaParcela.toFixed(2)}`)

} else if (numeroDeParcelas.toFixed(2) >= 7 && numeroDeParcelas.toFixed(2) <= 12) {
    //parcelado com juros
    const valorAPagarComJuros = valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas.toFixed(2)
    const valorDaParcela = valorAPagarComJuros / numeroDeParcelas.toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas.toFixed(2)}x de R$ ${valorDaParcela.toFixed(2)} totalizando R$ ${valorAPagarComJuros}, devido a incidência de juros`)
} else {
    //número de parcelas inválido
    console.log("Número de parcelas inválido.")
}