function converter(horas, minutos, segundos){
  const horasToSegundos = horas * 60 * 60;
  const minutosToSegundos = minutos * 60;

  return (horasToSegundos + minutosToSegundos + segundos)
}

console.log("Total em segundos é: ", converter(1, 1, 1))