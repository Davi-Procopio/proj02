let valorCompra = Number(prompt("Qual o valor da sua compra?"));
let valorFinal = 0;
let frete = 0;
let regiaoFrete;

if (valorCompra <= 0) {
    alert("Valor insuficiente, por favor tente de novo.");
} else {

    // Frete grátis
    if (valorCompra >= 250) {
        frete = 0;
    } else {
        regiaoFrete = prompt("Insira sua região (para cálculo do frete):").toLowerCase();

        if (regiaoFrete === "sudeste") {
            frete = 10;
        } else if (regiaoFrete === "sul") {
            frete = 20;
        } else {
            frete = 30;
        }
    }

    valorFinal = valorCompra + frete;

    alert("Valor da compra: R$ " + valorCompra);
    alert("Frete: R$ " + frete);
    alert("Total a pagar: R$ " + valorFinal);
}