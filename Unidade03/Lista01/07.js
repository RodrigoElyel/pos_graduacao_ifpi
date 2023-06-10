function funcao(vetor, numero){
  var resposta = []
  vetor.forEach((item, index) => {
    if(item == numero){
      resposta.push(index)
    }
  })
  console.log(resposta.join(", "))
}

// resposta nesse caso: 0, 3, 4
funcao([1, 2, 3, 1, 1, 5], 1)
