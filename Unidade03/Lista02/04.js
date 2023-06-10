function percorrido (subida, descida) {
  return subida - descida
}

const altura = 10000
const sobe = 100
const desce = 50
const percorrido_dia = percorrido(sobe, desce)
const quantidade_de_dias = altura / percorrido_dia
console.log("Ela vai demorar: " + quantidade_de_dias + " dias")
