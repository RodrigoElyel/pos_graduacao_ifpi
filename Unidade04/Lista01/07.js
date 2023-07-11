function primos(n){
  for(let i = 1; i <= n; i++){
    var divisores = 0
    for(let j = i; j >= 1; j--){
      if(i % j === 0){
        divisores++;
      }
    }
    if(divisores === 2){
      console.log("É primo: ", i)
    }
  }
}

primos(11)