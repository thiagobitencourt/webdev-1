console.log("ola eu sou a calculadora java");

function calcular(){
	alert("voce clicou em calcular");
	/*var calculadora = document.querySelectorAll(".btns-line");
	console.log(calculadora);*/
}

function valor(evento){
	console.log(this.value);
	
}
function limpar(){
	console.log("limparrr.....");
}


window.onload = function(){
	
	var botaoLimpar = document.getElementById("botao-limpar");
	botaoLimpar.addEventListener("click", limpar);
	
	var botoesNumero = document.querySelectorAll("button.numero");
	for(var i = 0; i < botoesNumero.length; i++){
		botoesNumero[i].addEventListener('click', valor);
	}
	
	
	
	
	
	
	
	var botoesOperacao = document.querySelectorAll("button.operacao");
	for(var i = 0; i < botoesOperacao.length; i++){
		botoesNumero[i].addEventListener('click', valor);
	}
}