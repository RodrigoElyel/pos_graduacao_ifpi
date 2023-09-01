var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines.shift());
// ano tem 365 dias;
// mês tem 30 dias;
var resto_divisao;
var ano = parseInt(dias / 365);
resto_divisao = dias % 365;
var mes = parseInt(resto_divisao / 30);
resto_divisao = resto_divisao % 30;
var dias = resto_divisao;

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dias} dia(s)`)
