//console.log("olá eu sou do aqrquivo calculadora.js");
console.log(document.getElementById('calculadora-display'))

function nomeDaFuncao(nome){
  console.log("Eu estou dentro da Funcao");
  console.log("Recebi por parametro, " + nome);

}

nomeDaFuncao("Meu Nome");

var func = function(){
  console.log("Funcao que está na Variavel");
}

func();

function calcular(){
  alert("Voce clicou em Calcular");
}

//funao que executa quando clica no botao
function value(){
  console.log(this, value);
}

window.onload = function(){
  console.log("Termonou o evento Onload");
}

function limpar(){
  console.log("voce clicou em limpar!!")
}

//funcao que chama um seletor especifico
var calcular = document.querySelector(".btn");
console.log(calcular);

var botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", limpar);

var botoesNumero = document.querySelectorAll("button.numero");
for(var i = 0; i < botoesNumero.lenght; i++){
  botoesNumero[i].addEventListener("click", value);
}
