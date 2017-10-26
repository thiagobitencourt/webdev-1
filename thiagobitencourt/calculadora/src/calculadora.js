//console.log("Oi, eu sou o arquivo calculadora.js");

// console.log(window);
console.log(document.getElementById("calculadora-display"));

function nomeDaFuncao(nome) {
  console.log("Estou dentro da função...");
  console.log("Recebi o parametro", nome);
}
// nomeDaFuncao("Meu nome");

var func = function() {
  console.log("Função que esta na variavel");
}
// func();

// window.onload = func;
window.onload = function() {
  console.log("Terminou de carregar a página!");
}

// window.onload = function() {
//
// }
