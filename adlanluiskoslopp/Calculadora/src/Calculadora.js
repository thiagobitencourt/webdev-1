var display;
var operador1 ;
var operador2;
var op;
/*
  Função que irá executar a operação requerida
*/

function obterOperador2(operacao){
  var valorDisplay = display.value;
  var inicioCorte = valorDisplay.indexOf(operacao) + 3;
  var substring = valorDisplay.substring(inicioCorte);

  operador2 = parseFloat(substring);

  return operador2;
}

function calcular() {

  var valorDisplay = display.value;
  var operacao;
  var resultado

  switch(op) {
    case "SOMAR":
      operacao = " + ";
      var operador2 = obterOperador2(operacao);
      resultado = operador1 + operador2;
      break;
    case "SUBTRAIR":
      operacao = " - ";
      var operador2 = obterOperador2(operacao);
      resultado = operador1 - operador2;
      break;
    case "MULTIPLICAR":
      operacao = " x ";
      var operador2 = obterOperador2(operacao);
      resultado = operador1 * operador2;
      break;
    case "DIVIDIR":
      operacao = " / ";
      var operador2 = obterOperador2(operacao);
      resultado = operador1 / operador2;
      break;
    default:
      console.log("Operação desconhecida!");
  }
  display.value = resultado;

//


    //alert("eu vou " + op + "com o valor " + operador1 + " e " + operador2);
}
/*
  Função que é chamada sempre que um usuario
  clica em um botão de numero da calculadora
*/
// function valor(element, evento) {
function valor() {
  var valorAtual = display.value;
  display.value = valorAtual + this.value;
}


function definirOperacao() {
  console.log(this.value);

  var operacao;
  switch(this.value) {
    case "SOMAR":
      operacao = " + ";
      break;
    case "SUBTRAIR":
      operacao = " - ";
      break;
    case "MULTIPLICAR":
      operacao = " x ";
      break;
    case "DIVIDIR":
      operacao = " / ";
      break;
    default:
      console.log("Operação desconhecida!");
  }
  operador1 = parseFloat(display.value);
  op = this.value;

  display.value = display.value + " " + operacao + " ";
}

function limpar() {
  display.value = "";
}

function ponto() {
  console.log('Você clicou no "ponto"...');
}

// Função chamada quando a página terminar de carregar!
window.onload = function() {
  console.log("Terminou de carregar a página!");

  var botaoLimpar = document.getElementById("botao-limpar");
  botaoLimpar.addEventListener("click", limpar);

  document.querySelector("button.ponto").addEventListener('click', ponto);

  var botoesNumero = document.querySelectorAll("button.numero");
  for(var i = 0; i < botoesNumero.length; i++) {
    botoesNumero[i].addEventListener('click', valor);
  }

  var botoesOperacao = document.querySelectorAll("button.operacao");
  for(var i = 0; i < botoesOperacao.length; i++) {
    botoesOperacao[i].addEventListener('click', definirOperacao);
  }

  display = document.getElementById("calculadora-display");
}
