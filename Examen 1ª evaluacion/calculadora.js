/*
document.addEventListener("click", function () {
    document.getElementById("caja").addEventListener("mousedown", prueba);
    alert("hola");

})*/

var botones; 
var pantalla;

window.onload = function() {
    pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}

document.addEventListener("DOMContentLoaded",

    function () {

        botones = document.getElementsByClassName("boton");

        for (let index = 0; index < botones.length; index++) {

            botones[index].addEventListener("mousedown", pulsarTecla);
            botones[index].addEventListener("mouseup", soltarTecla);
        }

    })

function pulsarTecla() {

    this.classList.add("sombreado");

    if(this.id == "borrar"){

        actualizarDisplay(this.id);

    }else{

        actualizarDisplay(this.innerText);

    }
    
}

function soltarTecla() {

    this.classList.remove("sombreado");

}

function actualizarDisplay(digito) {

    var totalDigitos = pantalla.value.length;


    if (pantalla.value == 0) pantalla.value = "";

    if (digito == "C") {

        pantalla.value = 0;


    } else if (digito == "=") {

        calcular(pantalla.value);

    } else if (digito == "borrar") {

        if (pantalla.value.length > 1) {

            pantalla.value = pantalla.value.substring(0, totalDigitos - 1);

        } else {

            pantalla.value = 0;
        }

    } else {

    
        /* Si recibe una opcion no numerica */
        if (isNaN(digito)) {
            /* Concatenamos siempre que el valor previo no sea un operador */

            if (totalDigitos >= 1 && pantalla.value != 0) {

                if (!isNaN(pantalla.value.charAt(totalDigitos - 1))) {
                    
                    pantalla.value += digito;

                }
            }else{
                pantalla.value = 0;
            }

            /* Si recibe un numero concatenamos */
        } else {
            pantalla.value += digito;

        }

    }
}

function calcular(operacion){

    operacion = operacion.replace("x", "*");

    pantalla.value = eval(operacion);
   

}





