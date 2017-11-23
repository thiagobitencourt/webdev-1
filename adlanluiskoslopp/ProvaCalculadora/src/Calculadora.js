var display;
var operador1;
var operador2;
var op;
var operacaoErrada = false;
var resultado
var displayStatus;
var listaStatus;
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
  if(operacaoErrada){
    console.log("esta errado");

    var painelDeErro = document.getElementById("erro");
    //painelDeErro.innerText = "a sua operacao esta errada!!" //injeta esse texto no html no id erro
    var listaDeErros = document.getElementById("lista-erros");

      if(!listaDeErros){
        //listaDeErros.class = ""; podemos adicionar uma classe no html
        listaDeErros = document.createElement("ul");
        listaDeErros.id = "lista-erros"; //nesse caso estamos adicionando um id lá no ul do html
        //listaDeErros.onclick = ""; podemos tambem adicionar um evento de onclick
        painelDeErro.appendChild(listaDeErros); //adiciona a painal de erros a lista dos erros
      }

      var itemDeErro = document.createElement("li");//criando os elementos da lista

      itemDeErro.innerText = "Operacao Errada!!" + display.value;
      listaDeErros.appendChild(itemDeErro); //adiciona a lista de erro os itens de erro

      return;
    }

  //var resultado

  switch(op) {
    case "SOMAR":
      var operador2 = obterOperador2(" + ");
      resultado = operador1 + operador2;
      break;
    case "SUBTRAIR":
      var operador2 = obterOperador2(" - ");
      resultado = operador1 - operador2;
      break;
    case "MULTIPLICAR":
      var operador2 = obterOperador2(" x ");
      resultado = operador1 * operador2;
      break;
    case "DIVIDIR":
      var operador2 = obterOperador2(" / ");
      resultado = operador1 / operador2;
      break;
    default:
      console.log("Operação desconhecida!");
  }
  display.value = resultado;
  statusOperacao();



    //alert("eu vou " + op + "com o valor " + operador1 + " e " + operador2);
}

function statusOperacao(){
  displayStatus = document.getElementById("statusOperacao");


  listaStatus = document.createElement("div");
  listaStatus.innerText = "Operacao: " + op + " Operador1: "+ operador1 + " Operador2: " + operador2;

  displayStatus.appendChild(listaStatus);
  displayStatus.addEventListener("click", mostraDisplay);
}



/*
  Função que é chamada sempre que um usuario
  clica em um botão de numero da calculadora
*/
// function valor(element, evento) {

function mostraDisplay(){
  display.value
  //console.log("eu vou aparecer no display");
}


function valor() {
  var valorAtual = display.value;
  display.value = valorAtual + this.value;
}


function definirOperacao() {

  if(op){
    operacaoErrada = true;


  }


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

function apagarStatus(){
  displayStatus.innerText = " ";
}

function limpar() {
  display.value = "";
  operacaoErrada = false;
  op = undefined;
}

function limparErros(){
  document.getElementById("erro").innerHTML = "";
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

  var limparStatus = document.getElementById("limparStatus");
  limparStatus.addEventListener("click", apagarStatus);

  display = document.getElementById("calculadora-display");
}
