var btnAdd = document.getElementById('btnAdd');
var btnRmv = document.getElementById('btnRmv');
var listaFaculdade = [];
var listaDiaDia = [];

btnAdd.onclick = function() {
    if (document.getElementById('rdFaculdadeAdd').checked) {
        listaFaculdade.push(document.getElementById('inputAdicionar').value);
        renderizarListaFaculdade();
    } else if (document.getElementById('rdDiaDiaAdd').checked) {
        listaDiaDia.push(document.getElementById('inputAdicionar').value);
        renderizarListaDiaDia();
    } else {
        alert("Por favor, selecione uma lista");
    }
}

btnRmv.onclick = function() {
    let dsTarefa = document.getElementById('inputRemover').value;
    if (document.getElementById('rdFaculdadeRmv').checked) {
        let index = listaFaculdade.indexOf(dsTarefa);
        if (index >= 0) {
            listaFaculdade.splice(index, 1);
            renderizarListaFaculdade();
        }
    } else if (document.getElementById('rdDiaDiaRmv').checked) {
        let index = listaDiaDia.indexOf(dsTarefa);
        if (index >= 0) {
            listaDiaDia.splice(index, 1);
            renderizarListaDiaDia();
        }
    } else {
        alert("Por favor, selecione uma lista");
    }
}

function renderizarListaFaculdade() {
    document.getElementById('ulFac').innerHTML = "";

    for (t of listaFaculdade) {
        var lista = document.getElementById('ulFac');
        var linha = document.createElement('li');
        linha.appendChild(document.createTextNode(t));
        lista.appendChild(linha);
    }
}

function renderizarListaDiaDia() {
    document.getElementById('ulDia').innerHTML = "";

    for (t of listaDiaDia) {
        var lista = document.getElementById('ulDia');
        var linha = document.createElement('li');
        linha.appendChild(document.createTextNode(t));
        lista.appendChild(linha);
    }

}