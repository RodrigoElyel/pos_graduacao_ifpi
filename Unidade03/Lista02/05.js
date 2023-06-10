function construindoParcelas (adicional, valor_inicial, parcela){
  var arr = []
  var decremento = adicional
  for(let i = 0; i < parcela; i++){
    if(decremento === 0){
      arr.push(valor_inicial)
    }else{
      arr.push(valor_inicial + 1)
      decremento--;
    }
  }
  return arr
}

var v = prompt("Digite o valor da parcela: ")
var p = prompt("Digite a quantidade de parcelas: ")

var resto = v % p
var valor_inicial = parseInt(v / p)
var resultado = construindoParcelas(resto, valor_inicial, p)

console.log("O valor da sua parcerla será: ")
console.log(`parcelas: ${resultado}`)
