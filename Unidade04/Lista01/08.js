function converter(horas, minutos){
  const arrHoras = [
    {num: 13, convert: 1},
    {num: 14, convert: 2},
    {num: 15, convert: 3},
    {num: 16, convert: 4},
    {num: 17, convert: 5},
    {num: 18, convert: 6},
    {num: 19, convert: 7},
    {num: 20, convert: 8},
    {num: 21, convert: 9},
    {num: 22, convert: 10},
    {num: 23, convert: 11},
    {num: 24, convert: 12}, 
  ]
  const getHoras = arrHoras.find(a => a.num === horas)
  console.log("\n----------------------------------------\n")
  console.log(`Hora original: ${horas}:${minutos}`)
  if(getHoras){
    console.log(`Hora convertida: ${getHoras.convert}:${minutos} P.M`)
  }else{
    console.log(`Hora convertida: ${horas}:${minutos} A.M`)
  }
  console.log("\n----------------------------------------\n")
}

do{
  console.log("1 - Realizar conversão.")
  console.log("0 - Sair.")
  var op = parseInt(prompt('Digite uma opção: '));
  if(op === 1){
    var horas = parseInt(prompt('Digite as horas: '));
    var minutos = parseInt(prompt('Digite os minutos: '));
    converter(horas, minutos);
  }
}while(op!=0);
console.log("\n------------FINALIZADO------------\n")