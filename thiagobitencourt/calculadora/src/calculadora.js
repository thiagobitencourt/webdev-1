/*
  Função que irá executar a operação requerida
*/
function calcular() {
    alert("Deve mostrar o resultado da operação!");
}

/*
  Função que é chamada sempre que um usuario
  clica em um botão de numero da calculadora
*/
// function valor(element, evento) {
function valor() {
  console.log(this.value);
}

function limpar() {
  console.log("Limpar...");
}

// Função chamada quando a página terminar de carregar!
window.onload = function() {
  console.log("Terminou de carregar a página!");

  var botaoLimpar = document.getElementById("botao-limpar");
  botaoLimpar.addEventListener("click", limpar);

  var botoesNumero = document.querySelectorAll("button.numero");
  for(var i = 0; i < botoesNumero.length; i++) {
    botoesNumero[i].addEventListener('click', valor);
  }
}
