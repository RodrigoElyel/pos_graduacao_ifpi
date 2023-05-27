var n1 = parseFloat(prompt('Digite o primeiro número: '));
var n2 = parseFloat(prompt('Digite o segundo número: '));
var n3 = parseFloat(prompt('Digite o terceiro número: '));

if (n1 > n2 && n1 > n3) {
  console.log(`${n1} é maior`);
} else if (n2 > n1 & n2 > n3) {
  console.log(`${n2} é maior`);
} else if (n3 > n1 & n3 > n2) {
  console.log(`${n3} é maior`);
} else {
  console.log(`São iguais`);
}