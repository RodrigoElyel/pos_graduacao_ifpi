function inverter(arr){
  var newArr = []
  for(let i = 0; i < arr.length/2; i++){
    newArr[i] = arr[arr.length - i - 1]
    newArr[arr.length - i - 1] = arr[i]
  }
  return newArr.join("")
}

var quatro_digitos = false;
do{
var numero = prompt('Digite um numero com 4 digitos (caso não receba 4 digites a mensagem vai repetir)')
  if(numero.length === 4){
    quatro_digitos = true;
  }
}while(quatro_digitos === false);

console.log(`Sequencia inicial: ${numero}`);
console.log(`Sequencia invertida: ${inverter(numero)}`);
