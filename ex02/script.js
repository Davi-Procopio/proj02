let valorPedido = Number(prompt("Olá, seja bem-vindo à cafeteria SENAI. Qual seria o valor do seu pedido?"));

if (valorPedido > 0 && valorPedido < 50) {
    alert("A sua compra foi de R$ " + valorPedido + ". Nenhum desconto disponível.");
} else if (valorPedido <= 0) {
    alert("Valor insuficiente. Por favor, tente novamente.");
} else {  // aqui usamos else sem condição
    let respostaCartao = prompt("Possui o nosso Cartão Fidelidade?").trim().toLowerCase();
    if (respostaCartao === "s" || respostaCartao === "sim") {
        let desconto = (valorPedido * 0.9).toFixed(2);
        alert("Você ganhou um desconto de 10%. Sua compra foi de R$ " + desconto + ".");
    } else {
        alert("A sua compra foi de R$ " + valorPedido + ". Você ganhou um cookie! Nenhum desconto disponível.");
    }
}