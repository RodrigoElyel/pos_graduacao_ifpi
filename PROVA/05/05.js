var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift();
var jogadas = lines;

for(let i = 0; i < jogadas.length; i = i + 2){
  var jogador01 = jogadas[i];
  var jogador02 = jogadas[i + 1];
  if(jogador01 === "ataque" && jogador02 === "pedra"){
    console.log("Jogador 1 venceu");
  }else if(jogador01 === "pedra" && jogador02 === "ataque"){
    console.log("Jogador 2 venceu");
  }
  else if(jogador01 === "pedra" && jogador02 === "papel"){
    console.log("Jogador 1 venceu");
  }
  else if(jogador01 === "papel" && jogador02 === "pedra"){
    console.log("Jogador 2 venceu");
  }
  else if(jogador01 === "ataque" && jogador02 === "papel"){
    console.log("Jogador 1 venceu");
  }
  else if(jogador01 === "papel" && jogador02 === "ataque"){
    console.log("Jogador 2 venceu");
  }
  else if(jogador01 === "papel" && jogador02 === "papel"){
    console.log("Ambos venceram");
  }
  else if(jogador01 === "pedra" && jogador02 === "pedra"){
    console.log("Sem ganhador");
  }else if(jogador01 === "ataque" && jogador02 === "ataque"){
    console.log("Aniquilacao mutua");
  }
  else{
  
  }
}
