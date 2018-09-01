function calcular() {
  alert("Deve mostrar o resultado da operação!");
}

//Função quando o usuário clica em um botão
function valor() {
  console.log(this.value);
}

function limpar() {
  console.log("limpar..");
}

//quando a página termina de carregar
window.onload = function() {
  document.getElementById("");

  //var calculadora = document.querySelectorAll(".btn");

  var botaoLimpar = document.getElementById("botao-limpar");
  botaoLimpar.addEventListener("click", limpar);

  var botoesNumero = document.querySelectorAll("button.numero");

  var botoesOperacao = document.querySelectorAll("button.operacao");

  for(var i = 0; i < botoesNumero.length; i++){
    botoesNumero[i].addEventListener("click", valor);
  }


  for (var i = 0; i < botoesOperacao.length; i++) {
    botoesOperacao[i].addEventListener("click", valor)
  }


}
