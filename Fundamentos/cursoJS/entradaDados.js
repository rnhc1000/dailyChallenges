const prompt = require('prompt-sync')({sigint: true})


console.log("Calculadora IMC");
var nome=prompt("Informe o nome: ");
var peso=prompt("Informe o peso: ");
var altura=prompt("Informe a altura: ");

console.log(typeof(nome), nome);
console.log(typeof(peso), peso);
console.log(typeof(altura), altura);

console.log(`Nome: ${nome} - Peso: ${peso} - Altura: ${altura}`)
var imc = parseFloat(peso / (altura * altura));
console.log(`IMC ->: ${imc.toFixed(2)}`);


if (imc > 25 && imc < 26) {
    console.log('Ligeiramente Acima do Peso Ideal... Quase lá!!!');
} else if (imc > 26) {
    console.log("Estilo de Vida Inadequado!!! Vamos perder peso?");
} else {
    console.log("Estilo de Vida Adequado!!!");
}

