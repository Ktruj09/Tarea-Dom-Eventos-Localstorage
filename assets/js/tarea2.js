'use strict'

window.addEventListener('load', function () {


    function agregar() {

        var boton = document.querySelector("#boton");

        var element = document.createElement("li");
        var text = document.createTextNode(prompt("Ingrese el dato...", text));
        element.appendChild(text);

        var list = document.getElementById("list");
        list.appendChild(element);


    }

    boton.addEventListener('click', function () {
        agregar();

    })

    var modificar = document.querySelector("#modificar");

    //función para editar
    function editado() {
        var texto = prompt("Ingresa el Contenido a Modificar");
        var elemento = document.createElement("li");

        var contenido = document.createTextNode(texto);
        elemento.appendChild(contenido);



        var ed = document.getElementsByTagName("li")[2];
        ed.innerHTML = texto;

    }

   

    modificar.addEventListener('click', function () {
        editado();

    });








});//end load
