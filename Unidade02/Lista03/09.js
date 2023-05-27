var nome = prompt('Digite um nome completo: ');

var nomes_separados = nome.split(" ")
console.log(`Sobrenome: ${nomes_separados[nomes_separados.length - 1]}`)