var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = [];

// transformando itens em float e passando para variável A;
for(let i = 0; i < lines.length; i++){
  A.push(parseFloat(lines[i]));
}

// listando menores ou igual a 10;
for(let i = 0; i < A.length; i++){
  if(A[i] <= 10){
    console.log(`A[${i}] = ${A[i].toFixed(1)}`)
  }
}