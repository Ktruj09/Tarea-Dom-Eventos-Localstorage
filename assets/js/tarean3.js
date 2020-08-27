'use strict'

var form = document.querySelector("#form");

form.addEventListener('submit', function () {
    var curso = document.querySelector("#addCurso").value;

    //Evaluamos si el campo esta vacio 
    if (curso.length >= 1) {
        localStorage.setItem(curso, curso);
    }
});

var list = document.querySelector(".list-curs");

for (var i in localStorage) {
    console.log(localStorage[i]);

    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        list.append(li);
    }
}

//parte para borrar
var formDelete = document.querySelector("#formDelete");

formDelete.addEventListener('submit', function () {

    var cursoDelete = document.querySelector("#deleteCurso").value;

    if (cursoDelete.length >= 1) {
        localStorage.removeItem(cursoDelete, cursoDelete);
    }

    var listActualizado = document.querySelector(".list-curs-actualizado");

    for (var i in localStorage) {
        console.log(localStorage[i]);

        if (typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.append(localStorage[i]);
            listActualizado.append(li);
        }
    }

});