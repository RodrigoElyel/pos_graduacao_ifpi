function divisores (n) {
  let arm = []
  for(let i = n - 1; i > 0; i--){
    if(n % i === 0){
      arm.push(i)
    }
  }
  return arm
}

function somaDivisores (arr) {
  let soma = 0;
  for(let i = 0; i < arr.length; i++){
    soma += arr[i]
  }
  return soma
}

var numero = parseInt(prompt('Digite um numero: '));
var result_divisores = divisores(numero)
var soma_divisores = somaDivisores(result_divisores)

console.log(`Divisores: ${result_divisores}`)
console.log(`Soma: ${soma_divisores}`)

if(soma_divisores === numero){
  console.log(`${numero} é perfeiro` )
}else{
  console.log(`${numero} não é perfeiro` )
}
