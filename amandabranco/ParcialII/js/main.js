var comentarios = [
  {"autor":"Amanda Branco" , "comentario" : "Muito booom!!"},
  {"autor" : "Fabricio Fernandes", "comentario" : "Excelente esse artigo :D"}
];


function addComentario(){

    var autor = document.getElementById("input-autor").value;
    var comentario = document.getElementById("input-comentario").value;

    var listaComentarios = document.getElementById("lista-comentarios");


    var itemComentario = document.createElement("li");
    itemComentario.innerHTML = '<p class="comentario"><strong>' + autor + ': ' + '</strong>' + comentario + '</p>';

    //var Amanda Branco = '<li><p class="comentario"><strong>' + autor + '</strong>' + comentario + '</p></li>';


    listaComentarios.appendChild(itemComentario);

}
