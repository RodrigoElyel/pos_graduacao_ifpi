var arr_notas = []
var quantidade = 10

for(let i = 0; i < quantidade; i++){
  var nota = Number(prompt(`Digite a nota ${i + 1}: `))
  arr_notas.push(nota)
}

var resultado = arr_notas.filter(nota => nota > 5.0)
console.log("NOTAS: ", resultado.join(", "))
