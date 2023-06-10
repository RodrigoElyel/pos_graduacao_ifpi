var array = []
var quantidade = 3

for(let i = 0; i < quantidade; i++){
  var numero = Number(prompt(`Digite um numero: `))
  array.push(numero)
  console.log("\n")
}

console.log("Lista invertida: ", array.reverse().join(", "))
