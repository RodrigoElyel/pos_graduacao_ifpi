var quatro_digitos = false;
do {
  var numero = parseInt(prompt('Digite um numero com 4 digitos (caso não receba 4 digites a mensagem vai repetir)'));
  numero = numero.toString();
  if (numero.length === 4) {
    quatro_digitos = true;
  }
} while (quatro_digitos === false);

// Estou levando em consideranção que estou recebendo uma string que transformei no do-while
var primeiro_digito = numero[0]
var ultimo_digito = numero[numero.length - 1]

console.log(`Primeiro digito: ${primeiro_digito}`);
console.log(`Último digito: ${ultimo_digito}`);
