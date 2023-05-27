var peso = parseFloat(prompt('Digite o peso da pessoa'));
var altura = parseFloat(prompt('Digite a altura da pessoa'));
var imc = peso / (Math.pow(altura, 2))
console.log(`IMC: ${imc.toFixed(2)}`);
