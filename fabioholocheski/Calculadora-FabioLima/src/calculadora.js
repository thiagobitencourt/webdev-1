console.log(document.getElementById('calculadora-display'));

function nomeDaFuncao() {
  console.log("Estou dentro da função....");
}

var func = function(){
  console.log("função que esta na variavel");
}

function calcular() {
  alert("Deve mostrar o resultado da operação")
}
function valor(element, evento, val) {
  console.log(element);
  console.log(evento);
  alert("voce clicou no botao   "  + val);
}
window.onload = function(){
  console.log("terminou de Carregar a Pagina");
}
