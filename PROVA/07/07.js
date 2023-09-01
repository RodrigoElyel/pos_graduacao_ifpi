var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var quantidade = parseInt(lines[0]);
lines.shift();
var combinacao = lines;

for(let i = 0; i < quantidade; i++){
  var valores = lines[i].split(' ');
  var x =  parseInt(valores[0]);
  var y =  parseInt(valores[1]);

  soma = x + y;

  switch(soma){
    case 0:
      console.log("PROXYCITY");
      break;
    case 1:
      console.log("P.Y.N.G.");
      break;
    case 2:
      console.log("DNSUEY!");
      break;
    case 3:
      console.log("SERVERS");
      break;
    case 4:
      console.log("HOST!");
      break;
    case 5:
      console.log("CRIPTONIZE");
      break;
    case 6:
      console.log("OFFLINE DAY");
      break;
    case 7:
      console.log("SALT");
      break;
    case 8:
      console.log("ANSWER!");
      break;
    case 9:
      console.log("RAR?");
      break;
    case 10:
      console.log("WIFI ANTENNAS");
      break;
  }
}