var soma_par = 0;
var soma_impar = 0;
for (let i = 1; i <= 10; i++){
  var n = parseFloat(prompt('Digite um número: '));
  if(n % 2 == 0){
    soma_par += n;
  }else{
    soma_impar += n;
  }
}

console.log(`Soma dos números pares: ${soma_par}`)
console.log(`Soma dos números impares: ${soma_impar}`)