var n1 = parseFloat(prompt('Digite um número: '));

console.log(`\n---> TABUADA DE ${n1} <---\n`)
for(let i = 0; i <= 10; i++){
  console.log(`${n1} x ${i} : ${i * n1}\n`)
}