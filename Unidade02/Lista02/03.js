var n1 = parseFloat(prompt('Digite o primeiro número: '));
var n2 = parseFloat(prompt('Digite o segundo número: '));

if (n1 < n2) {
  console.log(`${n1} é menor`);
} else if (n2 < n1) {
  console.log(`${n2} é menor`);
} else {
  console.log(`São iguais`);
}