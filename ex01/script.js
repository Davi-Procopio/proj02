let valorCarro = Number(prompt("Dê uma estimativa do valor do carro que deseja comprar (em reais):"));
let formaDePagamento = prompt("Agora, escolha uma forma de pagamento:\n\n1 - À vista no PIX: 15% de desconto;\n2 - Financiamento (até 48x): acréscimo de 20% de juros;\n3 - Cartão de Crédito (até 24x): acréscimo de 5% de juros.");

if (formaDePagamento === "1") {
    // PIX à vista: 15% de desconto
    let valorFinal = (valorCarro * 0.85).toFixed(2);
    alert("O valor total é de R$ " + valorFinal + ".");
} else if (formaDePagamento === "2") {
    // Financiamento (até 48x): 20% de juros
    let parcelas = Number(prompt("Escolha o número de parcelas (até 48x)."));
    if (parcelas > 0 && parcelas <= 48) {
        let valorFinal = (valorCarro * 1.2).toFixed(2);
        let parcelaUnitaria = (Number(valorFinal) / parcelas).toFixed(2);
        alert("O valor total é de R$ " + valorFinal + " e será feito em " + parcelas + " parcelas. Cada parcela custa R$ " + parcelaUnitaria + ".");
    } else {
        alert("Número de parcelas inválido.");
    }
} else if (formaDePagamento === "3") {
    // Cartão de Crédito (até 24x): 5% de juros
    let parcelas = Number(prompt("Escolha o número de parcelas (até 24x)."));
    if (parcelas > 0 && parcelas <= 24) {
        let valorFinal = (valorCarro * 1.05).toFixed(2);
        let parcelaUnitaria = (Number(valorFinal) / parcelas).toFixed(2);
        alert("O valor total é de R$ " + valorFinal + " e será feito em " + parcelas + " parcelas. Cada parcela custa R$ " + parcelaUnitaria + ".");
    } else {
        alert("Número de parcelas inválido.");
    }
} else {
    // Entrada inválida
    alert("Forma de pagamento inválida! Escolha 1, 2 ou 3.");
}