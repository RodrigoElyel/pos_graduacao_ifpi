var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quantidade = parseInt(lines[0]);
lines.shift();
var pessoas = lines;
var hobbits = 0;
var humanos = 0; 
var elfos = 0; 
var anoes = 0; 
var magos = 0;
for(let i = 0; i < quantidade; i++){
  var tipo = pessoas[i].split(" ")[1];
  if(tipo === "A"){
     anoes++; 
  }else if(tipo === "E"){
    elfos++;
  }else if(tipo === "H"){
    humanos++;
  }else if(tipo === "M"){
    magos++;
  }else{
    hobbits++;
  }
}

console.log(`${hobbits} Hobbit(s)`);
console.log(`${humanos} Humano(s)`);
console.log(`${elfos} Elfo(s)`);
console.log(`${anoes} Anao(oes)`);
console.log(`${magos} Mago(s)`);