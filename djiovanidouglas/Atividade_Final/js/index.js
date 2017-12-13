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

    var linha = "";

    for (i = 0; i < aCurriculos.length; i++) {
        linha += '<tr>';
        linha += '<td>' + aCurriculos[i].nome + '</td>';
        linha += '<td>' + aCurriculos[i].sobrenome + '</td>';
        linha += '<td>' + aCurriculos[i].idade + '</td>';
        linha += '<td><div class="glyphicon glyphicon-pencil clicavel" id="' + aCurriculos[i].id + '"></div></td>';
        linha += '</tr>';
    }

    $('#tabela_corpo').append(linha);

    $('.glyphicon-pencil').click(function () {
        for (i = 0; i < aCurriculos.length; i++) {
            if (aCurriculos[i].id == $(this).attr('id')) {
                $("#codigo").val(aCurriculos[i].id);
                $("#nome").val(aCurriculos[i].nome);
                $("#sobrenome").val(aCurriculos[i].sobrenome);
                $("#idade").val(aCurriculos[i].idade);
                $("#nascimento").val(aCurriculos[i].nascimento);
                $("#qualificacao").val(aCurriculos[i].qualificacao);
                $("#myModal").modal('show');
            }
        }

        window.localStorage['empresa modelo'] = JSON.stringify(aCurriculos);

    });

    $('#btnUpdate').click(function () {

        var oCurriculo = {
            id: $('#codigo').val(),
            nome: $('#nome').val(),
            sobrenome: $('#sobrenome').val(),
            idade: $('#idade').val(),
            nascimento: $('#nascimento').val(),
            qualificacao: $('#qualificacao').val(),
        };

        for (i = 0; i < aCurriculos.length; i++) {
            if (aCurriculos[i].id == $('#codigo').val()) {

                aCurriculos[i].nome = $('#nome').val();
                aCurriculos[i].sobrenome = $('#sobrenome').val();
                aCurriculos[i].idade = $('#idade').val();
                aCurriculos[i].nascimento = $('#nascimento').val();
                aCurriculos[i].qualificacao = $('#qualificacao').val();
            }

        }
        window.localStorage['empresa modelo'] = JSON.stringify(aCurriculos);
        window.location.href = "index.html";
    });

});
