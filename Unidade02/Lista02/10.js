var quantidade = 0;
var soma_alturas = 0;

do {
  console.log("Atenção: Idade menor ou igual a zero encerra o programa!")
  var altura = parseFloat(prompt('Digite a altura da pessoa'));
  var idade = parseInt(prompt('Digite a idade da pessoa'));

  if(idade > 50){
    soma_alturas += altura;
    quantidade++;
  }
  
} while (idade > 0);

var media = soma_alturas/quantidade;
console.log(`Pessoas com idade acima de 50 anos: ${quantidade}`)
console.log(`Media da altura das pessoas acima de 50 anos: ${media}`)