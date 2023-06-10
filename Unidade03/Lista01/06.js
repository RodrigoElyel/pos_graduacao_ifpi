var array = []

var quantidade = Number(prompt(`Quanto números deseja digitar? `))

for(let i = 0; i < quantidade; i++){
  var numero = Number(prompt(`Digite um numero (${i+1}): `))
  array.push(numero)
  console.log("\n")
}

console.log("Lista invertida: ", array.reverse().join(", "))
