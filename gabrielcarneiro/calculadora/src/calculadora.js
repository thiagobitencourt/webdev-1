var display;
var operador1;
var op;
var operacaoErrada = false;

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
    }

    var resultado;
    switch(op) {
      case "SOMAR":
        var operador2 = obterOperador2("+ ");
        resultado = operador1 + operador2;
        addHistorico(operador1, op, operador2);
        break;
      case "SUBTRAIR":
        var operador2 = obterOperador2("- ");
        resultado = operador1 - operador2;
        addHistorico(operador1, op, operador2);
        break;
      case "MULTIPLICAR":
        var operador2 = obterOperador2("X ");
        resultado = operador1 * operador2;
        addHistorico(operador1, op, operador2);
        break;
      case "DIVIDIR":
        var operador2 = obterOperador2("/ ");
        resultado = operador1 / operador2;
        addHistorico(operador1, op, operador2);
        break;
      default:
        console.log("Operação desconhecida!");
    }


    display.value = resultado;
}

function exibirItemHistorico(){
  var string = this.innerText;
  display.value = string;
}

function addHistorico(op1, operacao, op2){
  var historicoDeOperacoes = document.getElementById("historico-operacoes");
  var listaDeOperacoes = document.getElementById("lista-operacoes");

  if(!listaDeOperacoes) {
    listaDeOperacoes = document.createElement("ul");
    listaDeOperacoes.id = "lista-operacoes";

    historicoDeOperacoes.appendChild(listaDeOperacoes);
  }

  var itemDeHistorico = document.createElement("li");
  itemDeHistorico.className += "item-historico";
  itemDeHistorico.innerText = "Operação: " + operacao+ " operador1 = " +  op1 +
  " operador2 = " + op2;
  itemDeHistorico.onclick = exibirItemHistorico;

  listaDeOperacoes.appendChild(itemDeHistorico);
  return;
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
  operador1 = undefined;
}

function limparErros() {
  document.getElementById("erro").innerHTML = "";
}

function limparHistorico() {
  document.getElementById("historico-operacoes").innerHTML = "";
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
