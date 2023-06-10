var arr_notas = []
var arr_nomes = []
var quantidade = 5

for(let i = 0; i < quantidade; i++){
  var nome = prompt(`Digite o nome do aluno ${i + 1}: `)
  var nota = Number(prompt(`Digite a nota ${i + 1}: `))
  arr_nomes.push(nome)
  arr_notas.push(nota)
}

console.log("\nNome dos alunos com notas acima de 5: \n")
for(let i = 0; i < quantidade; i++){
  if(arr_notas[i] > 5){
    console.log(arr_nomes[i] + "\n")
  }  
}