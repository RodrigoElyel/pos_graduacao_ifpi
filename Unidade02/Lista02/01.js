var nota1 = parseFloat(prompt('Digite a nota 1: '));
var nota2 = parseFloat(prompt('Digite a nota 2: '));
var nota3 = parseFloat(prompt('Digite a nota 3: '));
var nota4 = parseFloat(prompt('Digite a nota 4: '));

var media = (nota1 + nota2 + nota3 + nota4) / 4.0;

console.log(`Média: ${media}`)
if (media >= 7) {
  console.log("APROVADO :)")
} else {
  console.log("REPROVADO :(")
}
