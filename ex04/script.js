let salario = Number(prompt("Digite o seu salário:"));
let parcela = Number(prompt("Digite o valor da parcela desejada:"));

let limite = salario * 0.3;

if (parcela > limite) {
    alert("Empréstimo Negado: Parcela muito alta");
} else {
    alert("Empréstimo Pré-aprovado");
}