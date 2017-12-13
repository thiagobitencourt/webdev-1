
$(document).ready(function () {
  recover();
});

function addComentario() {
  localStorage[$('#chave').val()] = $('#valor').val();

  $('#data').empty();

  recover();

  $("#chave").val('');
  $("#valor").val('');

};
function limpaComentario() {
  localStorage.clear();
  $('#data').empty();
}

function recover() {
  for (let chave in localStorage) {
      let dado = localStorage.getItem(chave);
      $('#data').append("<div class ='comentario'><h5>" + chave + "</h5><p>" + dado + "</p></div>");
  }
}
