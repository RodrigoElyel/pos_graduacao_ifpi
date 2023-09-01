var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
// proporção de 1km - 2min
var minutos = distancia * 2;
console.log(`${minutos} minutos`);
