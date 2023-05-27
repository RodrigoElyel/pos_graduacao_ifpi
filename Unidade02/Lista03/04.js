var texto = "Ifpi";

for (let i = 0; i < texto.length; i++) {
  console.log(texto.substr(0, i + 1));
}

for (let i = texto.length - 2; i >= 0; i--) {
  console.log(texto.substr(0, i + 1));
}