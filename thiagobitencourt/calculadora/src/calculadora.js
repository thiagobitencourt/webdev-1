var display;
var operador1;
var op;

function obterOperador2(operacao) {
    var valorDisplay = display.value;

    var inicioCorte = valorDisplay.indexOf(operacao) + 2;
    var substring = valorDisplay.substr(inicioCorte);
    var operador2 = parseFloat(substring);

    return operador2;
}

/*
  Função que irá executar a operação requerida
*/
function calcular() {
    var resultado;

    switch(op) {
      case "SOMAR":
        resultado = operador1 + obterOperador2("+ ");
        break;
      case "SUBTRAIR":
        var operador2 = obterOperador2("- ");
        resultado = operador1 - operador2;
        break;
      case "MULTIPLICAR":
        var operador2 = obterOperador2("x ");
        resultado = operador1 * operador2;
        break;
      case "DIVIDIR":
        var operador2 = obterOperador2("/ ");
        resultado = operador1 / operador2;
        break;
      default:
        console.log("Operação desconhecida!");
    }

    display.value = resultado;
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

  display.value = display.value + operacao;
}

function limpar() {
  display.value = "";
}

function ponto() {
  display.value = display.value + ".";
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
