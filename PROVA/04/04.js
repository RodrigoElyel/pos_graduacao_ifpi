var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; i < lines.length; i++){
  var valores = lines[i].split(' ');
  var x = valores[0] ? parseInt(valores[0]) : false;
  var y = valores[1] ? parseInt(valores[1]) : false;

  if(x === false || y === false){}
  else if(y === 0){
    console.log("divisao impossivel");
  }else{
    var divisao = x/y;
    console.log(divisao.toFixed(1));
  }
}