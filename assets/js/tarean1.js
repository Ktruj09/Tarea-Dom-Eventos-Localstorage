'use strict'

window.addEventListener('load', function () {

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');

    //metodo  que utilizaremos para desapareccer los datos
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.log("Datos Guardados...");

        //declaración de los datos a ingresar

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        var email = document.querySelector("#email").value;
        var sexo = document.querySelector("#sexo").value;
    

        //esta parte sirve para validar que se hayan ingresado datos en los input
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre no es valido...");
            //muestra que error en la casilla de nombre 
            document.querySelector("#error_nombre").innerHTML = "Nombre no Valido";
            return false;
        } else {
            //desaperece una vez se haya ingresado el nombre
            document.querySelector("#error_nombre").style.display = "none";
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("El Apellido no es valido...");
            //muestra que error en la casilla de apellido 
            document.querySelector("#error_apellido").innerHTML = "Apellido no Valido";
            return false;
        } else {
            //desaperece una vez se haya ingresado el nombre
            document.querySelector("#error_apellido").style.display = "none";
        }

        //trim no se puede usar en un campo numerico 
        console.log(edad);
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("El edad no es valido...");
            //muestra que error en la casilla de nombre 
            document.querySelector("#error_edad").innerHTML = "Edad no Valido";
            return false;
        } else {
            document.querySelector("#error_edad").style.display = "none";
        }


        if (email.trim() == null || email.trim().length == 0) {
            alert("El email no es valido...");
            //muestra que error en la casilla de email 
            document.querySelector("#error_email").innerHTML = "email no Valido";
            return false;
        } else {
            //desaperece una vez se haya ingresado el nombre
            document.querySelector("#error_email").style.display = "none";
        }

        if (sexo.trim() == null || sexo.trim().length == 0) {
            alert("El sexo no es valido...");
            //muestra que error en la casilla de sexo 
            document.querySelector("#error_sexo").innerHTML = "sexo no Valido";
            return false;
        } else {
            //desaperece una vez se haya ingresado el nombre
            document.querySelector("#error_sexo").style.display = "none";
        }


        //al momento de dar enviar, aparecera el cuadro donde mostrara los datos ingresados
        box_dashed.style.display = "block";
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");
        var p_email = document.querySelector("#p_email span");
        var p_sexo = document.querySelector("#p_sexo span")

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        p_email.innerHTML = email;
        p_sexo.innerHTML = sexo;

      

    })//end formulario 


});//end load funtion