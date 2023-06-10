var array = []
var quantidade = 5

for(let i = 0; i < quantidade; i++){
  var nome = prompt(`Digite o nome do aluno ${i + 1}: `)
  var nota1 = Number(prompt(`Digite a primeira nota ${i + 1}: `))
  var nota2 = Number(prompt(`Digite a segunda nota ${i + 1}: `))
  array.push(
    {
      "nome": nome,
      "nota1": nota1,
      "nota2": nota2,
      "media": (nota1 + nota2) / 2
    }
  )
  console.log("\n")
}

console.log("\nLista de alunos: \n")
array.forEach(item => {
  console.log("-----------------------------")
  console.log("Nome: ", item.nome)
  console.log("Nota 1: ", item.nota1)
  console.log("Nota 2: ", item.nota2)
  console.log("Media: ", item.media)
})

console.log("\nLista de alunos em tabela: \n")
console.table(array)