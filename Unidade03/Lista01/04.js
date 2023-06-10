var array = []
var quantidade = 80

for(let i = 0; i < quantidade; i++){
  var nome = prompt(`Digite o nome do aluno ${i + 1}: `)
  var nota = Number(prompt(`Digite a nota ${i + 1}: `))
  array.push(
    {
      "nome": nome,
      "nota": nota,
    }
  )
  console.log("\n")
}

var soma_notas = array.reduce((arm, array) => arm + array.nota, 0)
console.log("\nMEDIA DA TURMA: ", soma_notas / quantidade)
console.log("\nLista de notas dos alunos: \n")
array.forEach(item => {
  console.log("-----------------------------")
  console.log("Nome: ", item.nome)
  console.log("Nota: ", item.nota)
})
