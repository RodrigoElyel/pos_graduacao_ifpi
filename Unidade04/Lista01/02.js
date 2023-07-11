function data(dia, mes, ano){
  const arrMes = [
    {num: 1, nome: "janeiro"},
    {num: 2, nome: "fevereiro"},
    {num: 3, nome: "março"},
    {num: 4, nome: "abril"},
    {num: 5, nome: "maio"},
    {num: 6, nome: "junho"},
    {num: 7, nome: "julho"},
    {num: 8, nome: "agosto"},
    {num: 9, nome: "setembro"},
    {num: 10, nome: "outubro"},
    {num: 11, nome: "novembro"},
    {num: 12, nome: "dezembro"},
  ]

  const getMes = arrMes.find(a => a.num === mes).nome

  return `${dia} de ${getMes} de ${ano}`
}

console.log(data(26, 4, 1999))
