var raio = parseFloat(prompt('Digite o raio da lata'));
var altura = parseFloat(prompt('Digite a altura da lata'));

var volume = 3.14 * (Math.pow(raio, 2)) * altura;

console.log(`Volume da lata: ${volume}`);
