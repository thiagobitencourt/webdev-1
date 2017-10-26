console.log(document.getElementById('calculadora-display'));



var func = function(){
  console.log("função que esta na variavel");
}

function calcular() {
  alert("Deve mostrar o resultado da operação")
}
function valor() {
  console.log(this.value);
}
function limpar() {
  console.log("Limpar...");
}
window.onload = function(){
  console.log("terminou de Carregar a Pagina");

  //var calculadora = document.querySelectorAll(".btnCalc");
  //console.log(calculadora);

  var botaoLimpar = document.getElementById("botao-limpar");
  botaoLimpar.addEventListener("click", limpar);

  var botoesNumero = document.querySelectorAll("button.numero");


  for (var i = 0; i < botoesNumero.length; i++) {
    botoesNumero[i].addEventListener('click', valor)
  }


}
