var list =[];
var like = false;


function setLike(){
    var curtida = document.getElementById('curtida');

    if (like) {
      curtida.innerText = 1;
    } else {
      curtida.innerText = 0;
    }
}

function curtirArtigo(){
    like = !like;
    setLike();
}

function setList (list) {
    var listaComentarios = document.getElementById("lista-comentarios");

    var comentarios = '<ul>';
    for(var key in list){
        comentarios += '<li><p class="comentario"><strong>' + list[key].autor + ': ' + '</strong>' + list[key].comentario +
        '</p><button type="button" class="btn-remove-comentario" onclick="removeComentario('+key+')">Remover</button></li>';
    }
    saveListStorage(list);
    comentarios += '</ul>';
    document.getElementById("lista-comentarios").innerHTML = comentarios;
}

function addComentario(){

  if (!validacao()){
    return;
  }

  var autor = document.getElementById("input-autor").value;
  var comentario = document.getElementById("input-comentario").value;
  list.unshift({"autor":autor , "comentario":comentario });
  setList(list);
  limparFormulario();

}

function validacao(){
  var autor = document.getElementById("input-autor").value;
  var comentario = document.getElementById("input-comentario").value;


	if (autor === ""){
		alert('Digite o nome do autor!');
    return false;
	}
	if (comentario === ""){
		alert('Digite seu comentário!');
    return false;
	}
  return true;
}

function limparFormulario(){
  var autor = document.getElementById("input-autor");
  var comentario = document.getElementById("input-comentario");
  var email = document.getElementById("input-email");

  email.value = "";
  autor.value = "";
  comentario.value = "";
}

function removeComentario(e){
    if (confirm("Deletar comentario?")){
      list.splice(e, 1);
    }
    setList(list);
}

function saveLikeStorage(contLike){
	var jsonStr = JSON.stringify(contLike);

	localStorage.setItem("contLike",jsonStr);
}

function initLikeStorage(){
	var testLike = localStorage.getItem("contLike");

	if (testLike) {
		contLike = JSON.parse(testLike);
	}

	setLike(contLike);
}


function saveListStorage(list){
	var jsonStr = JSON.stringify(list);

	localStorage.setItem("list",jsonStr);
}

function initListStorage(){
	var testList = localStorage.getItem("list");

	if (testList) {
		list = JSON.parse(testList);
	}

	setList(list);
}

initListStorage();
