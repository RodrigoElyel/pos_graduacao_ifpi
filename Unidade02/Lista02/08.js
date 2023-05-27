var pessoas = [];
for (let i = 1; i <= 2; i++){
  console.log(`\n---> Dados da pessoa ${i} <---\n`)
  var idade = parseInt(prompt('Digite a idade da pessoa'));
  var peso = parseFloat(prompt('Digite o peso da pessoa'));
  var altura = parseFloat(prompt('Digite a altura da pessoa'));
  pessoas.push({
    "idade": idade,
    "peso": peso,
    "altura": altura,
    "id": i
  });
  console.clear();
}

// Item A
var itemA = pessoas.filter(p => p.idade > 50).length;
console.log(`Item A`);
console.log(`A quantidade de pessoas com idade superior a 50 anos: ${itemA}\n`);

// Item B
var pessoas_10_20 = pessoas.filter(p => p.idade >= 10 && p.idade <= 20);
var soma_alturas = 0;
pessoas_10_20.forEach(p => {
  soma_alturas += p.altura;
})
var media = soma_alturas/pessoas_10_20.length;
console.log(`Item B`);
console.log(`A média das alturas das pessoas com idade entre 10 e 20 anos: ${media}\n`);

// Item C
var pessoas_40 = pessoas.filter(p => p.peso < 40).length;
var percentual = pessoas_40/pessoas.length;
console.log(`Item C`);
console.log(`O percentual de pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas: ${percentual * 100}%\n`);
