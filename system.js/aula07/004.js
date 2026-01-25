
//operadores aritméticos
//5+2=7
//5-2=3
//5*2=10
//5/2=2.5 
//5%2=1 - resto da divisão
//5**2=25 - potência

//5+3/2=6.5
//3/2=1.5
//1.5+5=6.5

//colocar parenteses
//(5+3)/2=4

//ordem de precedência
//()
//**
// * / %
// + -
//><>=
//!
//&&
//||

//atribuição simples
var a = 5+3; //8
var b = a % 5; //3 pois 8/5=3
var c = 5 * b ** 2;
var d = 10 - a / 2;
var e = 6 * 2 / d;
var f = b % e + 4 / e;

var n = 3;
//simplificando
n = n + 4; //n+=4
n = n - 5; //n-=5
n = n * 4; //n*=4
n = n / 2; //n/=2   
n = n ** 2; //n**=2
n = n % 5; //n%=5

//incremento
var x = 5
x = x + 1; // x+=1 fica x++
x = x - 1; //5

//aula 08
//relacionais
//> maior que 
//< menor que
//>= maior ou igual
//<= menor ou igual
//== igualdade
//!= diferente
//== valor e tipo
//!= valor e tipo

//5 > 2 true
// 7 < 4 false
// 8 >= 8 true
// 9 <= 7 false
//5 == 5 = true
// 4 != 4 false //DIFERENTE

//exemplos
preço >= 200.50
idade < 18
curso == "JavaScript"
n1 != n2

//identidade
5 == 5 //true
5 == '5' //true
5 === 5 //true
5 === '5' //false

//lógicos
//! negação 
//&& conjunção (E)
//|| disjunção

//exemplos
//!true = false
//!false = true

//true && true = true
//true && false = false
//false && true = false
//false && false = false

//true || true = true
//true || false = true
//false || true = true
//false || false = false

//idade >= 15 && idade <= 17 IDADE ENTRE 15 E 17?
estado == "SP" || estado == "RJ" //ESTADO SP OU RJ?
salário > 1500 && sexo != 'M' //  SALÁRIO MAIOR QUE 1500 E SEXO DIFERENTE DE M?

//ternário
//teste ? true : false
//média >=? "Aprovado" : "Reprovado"

exemplo
var média = 5.6
média > 7? "aprovado" : "reprovado"