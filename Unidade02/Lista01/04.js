var valor_hora_aula = parseFloat(prompt('Digite a valor da hora da aula'));
var numeros_aulas = parseInt(prompt('Digite a número de aulas dadas'));
var percentual_inss = parseFloat(prompt('Digite o percentual de desconto do INSS (Exemplo: se for 20%, digite apenas o número 20)'));

// calculo de horas por numero de aulas dadas;
var salario_liquido = (valor_hora_aula * numeros_aulas);
// calculo com desconto do INSS
salario_liquido *= (1 - percentual_inss / 100)
console.log(`Salário liquido: ${salario_liquido}`);
