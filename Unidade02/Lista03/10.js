var texto = prompt('Digite um texto: ');
let quantidade = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) === " ") {
    quantidade++;
  }
}

console.log(`Número de espaços em branco: ${quantidade}`)