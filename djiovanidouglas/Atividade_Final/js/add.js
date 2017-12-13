$(document).ready(function () {

    $('#btnAdd').click(function () {

        var aCurriculos;
        if (window.localStorage['empresa modelo'] != "")
        {
            aCurriculos =
                JSON.parse(window.localStorage['empresa modelo'] || '[]');
        }
        else
        {
            aCurriculos = [];
        }

        var oCurriculo = {
            id: new Date().getTime(),
            nome: $('#nome').val(),
            sobrenome: $('#sobrenome').val(),
            idade: $('#idade').val(),
            nascimento: $('#nascimento').val(),
            qualificacao: $('#qualificacao').val(),
            qtd: $('#qtd').val()
        };

        aCurriculos.push(oCurriculo);

        window.localStorage['empresa modelo'] = JSON.stringify(aCurriculos);

        window.location.href = "index.html";

    });

});
