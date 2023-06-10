function inverter(arr){
  var newArr = []
  for(let i = 0; i < arr.length/2; i++){
    newArr[i] = arr[arr.length - i - 1]
    newArr[arr.length - i - 1] = arr[i]
  }
  return newArr.join("")
}


var numero = prompt('Digite um numero : ');

console.log(`Sequencia inicial: ${numero}`);
console.log(`Sequencia invertida: ${inverter(numero)}`);

if(numero === inverter(numero)){
  console.log(`É palíndromo`);
}else{
  console.log(`Não é palíndromo`);
}
