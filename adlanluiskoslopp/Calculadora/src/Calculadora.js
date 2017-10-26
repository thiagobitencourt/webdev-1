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

window.onload = function(){
  console.log("Termonou o evento Onload")
}
