const dir = {
  "1": "um",
  "2": "dois",
  "3": "três",
  "4": "quatro",
  "5": "cinco",
  "6": "seis",
  "7": "sete",
  "8": "oito",
  "9": "nove",
  "10": "dez"
};

var digitos = prompt('Digite um número: ');

var arm = ""
for(let i = 0; i < digitos.length; i++){
  arm += dir[digitos[i]] + ( i == digitos.length - 1 ? "" : ", ")
}
console.log(arm)
