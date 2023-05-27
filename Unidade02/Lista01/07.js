var a = parseInt(prompt('Digite o valor de A'));
var b = parseInt(prompt('Digite o valor de B'));

var aux = a;
a = b;
b = aux;

console.log(`Novo valor de A: ${a}`);
console.log(`Novo valor de B: ${b}`);
