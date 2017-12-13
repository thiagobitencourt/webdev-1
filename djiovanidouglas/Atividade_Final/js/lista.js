// Comando JavaScript

$(document).ready(function () {

    var aCurriculos;

    if (window.localStorage['empresa modelo'] != "") {
        aCurriculos =
            JSON.parse(window.localStorage['empresa modelo'] || '[]');
    }
    else {
        aCurriculos = [];
    }

    var select = '<select id="Nome" name="Nome" class="form-control">';

    for (i = 0; i < aCurriculos.length; i++) {
        select += '<option value="' + aCurriculos[i].nome + '">' + aCurriculos[i].nome + '</option>';
    }

    select += '</select>';

    $('#new_select').append(select);

});
