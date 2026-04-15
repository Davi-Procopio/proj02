let idade = Number(prompt("Digite sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)").toLowerCase();

let valorIngresso;

if (idade < 12 || idade > 60 || estudante === "sim") {
    valorIngresso = 20;
} else {
    valorIngresso = 40;
}

alert("Valor do ingresso: R$ " + valorIngresso);