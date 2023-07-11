function triangulo(l1, l2, l3){
  if(l1 <= 0 || l2 <= 0 || l3 <= 0){
    console.log("Os números devem ser maiores que zero!")
    return;
  }

  // forma triangulo?
  if((l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2)){
    console.log("É um triangulo")

    // Qual tipo de triangulo
    if(l1 == l2 && l2 == l3 && l1 == l3){
      console.log("É um equilátero")
    }else if(l1 == l2 || l2 == l3 || l1 == l3){
      console.log("É um isóscele")
    }else{
      console.log("É um escaleno")
    }
    
  }else{
     console.log("Não é um triangulo")
  }
}

triangulo(1, 1, 1)
console.log("\n----------------------------------------\n")
triangulo(1, 2, 2)
console.log("\n----------------------------------------\n")
triangulo(0.5, 0.9, 1)
console.log("\n----------------------------------------\n")
triangulo(1, 2, 3)
console.log("\n----------------------------------------\n")
triangulo(0, 2, 3)