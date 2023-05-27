var valor = parseFloat(prompt('Digite o valor inicial'));
var tempo = parseInt(prompt('Digite o tempo de atraso (Dias)'));
var taxa = parseFloat(prompt('Digite a taxa de atraso (Exemplo: se for 20%, digite apenas o número 20)'));
var prestacao = valor + (valor * (taxa / 100) * tempo);
console.log(`prestacao: ${prestacao.toFixed(2)}`);
