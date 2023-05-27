var valor = parseFloat(prompt('Digite o valor do produto'));
var calc_desconto = (1 - 12 / 100);

var valor_com_desconto = valor * calc_desconto;

console.log(`Valor com desconto: ${valor_com_desconto}`);
