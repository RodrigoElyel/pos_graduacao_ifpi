var texto = prompt('Digite um texto: ');

console.log(`Número de caracteres sem tratamento: ${texto.length}`)
console.log(`Número de caracteres sem espaços: ${texto.replace(" ", "").length}`)