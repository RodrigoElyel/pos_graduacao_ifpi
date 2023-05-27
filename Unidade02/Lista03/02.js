var texto = "Ifpi";

for (let i = 0; i < texto.length; i++) {
  let arm = "";
  for (let j = 0; j <= i; j++) {
    arm += texto.charAt(j);
  }
  console.log(arm);
}

for (let i = texto.length - 2; i >= 0; i--) {
  let arm = "";
  for (let j = 0; j <= i; j++) {
     arm += texto.charAt(j);
  }
  console.log(arm);
}


