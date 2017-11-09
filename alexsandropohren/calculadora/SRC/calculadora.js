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
  var  valorAtual = display.value;

  display.value = valorAtual + this.value;
}

function definirOperacao(){
  console.log(this.value);
  
  var operacao;

    switch (this.value) {
      case "SOMAR":
      operacao = "+";
          break;
      case "SUBTRAIR":
      operacao = "-";
          break;
      case "MULTIPLICAR":
      operacao = "*";
          break;
      case "DIVIDIR":
      operacao = "/";
          break;
      default:
      console.log("Operação Desconhecida !");

    }
    display.value = display.value + operacao;
}

function limpar() {
  display.value = "";
}

function ponto() {
  console.log("Você clicou no ponto !!!");

}

// Função chamada quando a página terminar de carregar!
window.onload = function() {
  console.log("Terminou de carregar a página!");

  var botaoLimpar = document.getElementById("botao-limpar");
  botaoLimpar.addEventListener("click", limpar);

  var botaoPonto = document.querySelector("button.ponto");
  botaoPonto.addEventListener("click", ponto)

  var botoesNumero = document.querySelectorAll("button.numero");
  for(var i = 0; i < botoesNumero.length; i++) {
    botoesNumero[i].addEventListener('click', valor);
  }

var botoesOperacao = document.querySelectorAll("button.operacao");
for(var i = 0; i < botoesOperacao.length; i++) {
  botoesOperacao[i].addEventListener('click', definirOperacao);
}
}

display = document.getElementById("calculadora-display");
