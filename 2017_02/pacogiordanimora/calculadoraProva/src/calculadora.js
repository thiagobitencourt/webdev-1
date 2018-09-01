var display;
var operador1;
var op;
var operacaoErrada = false;
var operacao2;

function obterOperador2(operacao) {
    var valorDisplay = display.value;

    var inicioCorte = valorDisplay.indexOf(operacao) + 2;
    var substring = valorDisplay.substr(inicioCorte);
    var operador2 = parseFloat(substring);

    return operador2;
}

function calcular() {
    if(operacaoErrada) {
      console.log("Esta errado!!!");

      var painelDeErro = document.getElementById("erro");
      var listaDeErros = document.getElementById("lista-erros");

      if(!listaDeErros) {
        listaDeErros = document.createElement("ul");
        listaDeErros.id = "lista-erros";
        painelDeErro.appendChild(listaDeErros);
      }

      var itemDeErro = document.createElement("li");
      itemDeErro.innerText = "Operação errada: " + display.value;

      listaDeErros.appendChild(itemDeErro);
      return;
    }else {

    var resultado;
    switch(op) {
      case "SOMAR":
        var operador2 = obterOperador2("+ ");
        resultado = operador1 + obterOperador2("+ ");
        operacao2 = "SOMAR";
        break;
      case "SUBTRAIR":
        var operador2 = obterOperador2("- ");
        resultado = operador1 - obterOperador2("- ");
        operacao2 = "SUBTRAIR";
        break;
      case "MULTIPLICAR":
        var operador2 = obterOperador2("x ");
        resultado = operador1 * obterOperador2("x ");;
        operacao2 = "MULTIPLICAR";
        break;
      case "DIVIDIR":
        var operador2 = obterOperador2("/ ");
        resultado = operador1 / obterOperador2("/ ");
        operacao2 = "DIVIDIR";
        break;
      default:
        console.log("Operação desconhecida!");
    }
    console.log("Esta certo!!");

    var painelDeAcerto = document.getElementById("acerto");
    var listaDeAcertos = document.getElementById("lista-acertos");

    if(!listaDeAcertos) {
      listaDeAcertos = document.createElement("ul");
      listaDeAcertos.id = "lista-acertos";
      painelDeAcerto.appendChild(listaDeAcertos);
    }

    var itemDeAcerto = document.createElement("li");
    itemDeAcerto.innerText = "Operação = " + operacao2 + " Operador 1 = " + operador1 + " Operador 2 = " + operador2;

    listaDeAcertos.appendChild(itemDeAcerto);
    display.value = resultado;
    return;

  }
}


function valor() {
  var valorAtual = display.value;
  display.value = valorAtual + this.value;
}

function definirOperacao() {
  if(op) {
    operacaoErrada = true;
  }

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
  operacaoErrada = false;
  op = undefined;
}

function limparErros() {
  document.getElementById("erro").innerHTML = "";
}

function limparAcertos() {
  document.getElementById("acerto").innerHTML = "";
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
