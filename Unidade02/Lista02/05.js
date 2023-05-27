var n1 = parseFloat(prompt('Digite o primeiro número: '));
var n2 = parseFloat(prompt('Digite o segundo número: '));

            
do {
  console.log("---> Escolha uma opção <---");
  console.log("1. Média entre os número digitados;")
  console.log("2. Diferença do maior pelo menor;")
  console.log("3. Produto entre os números digitados;")
  console.log("4. Divisão do primeiro pelo segundo;")
  console.log("0. Sair;");
  var op = parseInt(prompt('Opção: '));
  console.clear()
  switch(op){
    case 1:
      var media = (n1+n2)/2;
      console.log(`Média: ${media}`)
      break;
    case 2:
      var diferenca = (n1 > n2) ? (n1 - n2) : (n2 - n1);
      console.log(`Diferença: ${diferenca}`)
      break;
    case 3:
      var produto = (n2 * n1);
      console.log(`Produto: ${produto}`)
      break;
    case 4:
      var div = (n1 / n2);
      console.log(`Divisão: ${div}`)
      break;
    case 0:
      console.log("Encerrando!")
      break;
    default:
      console.log("Erro. Digite uma opção válida!")
      break;
  }
   console.log("\n...\n...\n...\n...\n")
} while(op != 0)