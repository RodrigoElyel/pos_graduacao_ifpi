const colecao = [1, 2, 3, 0, -1, 4, -5]
// const colecao = [1, 2, 3, 0, 1, 4, 5]
var numero

for(let i = 0; i < colecao.length; i++){
  if(colecao[i] < 0){
    numero = colecao[i]
    break
  }
}

if(numero){
  console.log("O primeiro negativo é: ", numero)
}else{
  console.log("Não tem número negativo")
}