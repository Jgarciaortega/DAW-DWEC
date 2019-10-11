/*
document.addEventListener("click", function () {
    document.getElementById("caja").addEventListener("mousedown", prueba);
    alert("hola");

})*/

document.addEventListener("DOMContentLoaded", 

    function() {
    document.getElementById("0").addEventListener("mousedown",pulsarTecla);
    document.getElementById("0").addEventListener("mouseup",soltarTecla);

    document.getElementById("1").addEventListener("mousedown",pulsarTecla);
    document.getElementById("1").addEventListener("mouseup",soltarTecla);

    document.getElementById("2").addEventListener("mousedown",pulsarTecla);
    document.getElementById("2").addEventListener("mouseup",soltarTecla);
    
    document.getElementById("3").addEventListener("mousedown",pulsarTecla);
    document.getElementById("3").addEventListener("mouseup",soltarTecla);

    document.getElementById("4").addEventListener("mousedown",pulsarTecla);
    document.getElementById("4").addEventListener("mouseup",soltarTecla);    

    document.getElementById("5").addEventListener("mousedown",pulsarTecla);
    document.getElementById("5").addEventListener("mouseup",soltarTecla);

    document.getElementById("6").addEventListener("mousedown",pulsarTecla);
    document.getElementById("6").addEventListener("mouseup",soltarTecla);

    document.getElementById("7").addEventListener("mousedown",pulsarTecla);
    document.getElementById("7").addEventListener("mouseup",soltarTecla);

    document.getElementById("8").addEventListener("mousedown",pulsarTecla);
    document.getElementById("8").addEventListener("mouseup",soltarTecla);

    document.getElementById("9").addEventListener("mousedown",pulsarTecla);
    document.getElementById("9").addEventListener("mouseup",soltarTecla);

    document.getElementById("C").addEventListener("mousedown",pulsarTecla);
    document.getElementById("C").addEventListener("mouseup",soltarTecla);

    document.getElementById("%").addEventListener("mousedown",pulsarTecla);
    document.getElementById("%").addEventListener("mouseup",soltarTecla);

    document.getElementById("/").addEventListener("mousedown",pulsarTecla);
    document.getElementById("/").addEventListener("mouseup",soltarTecla);

    document.getElementById("x").addEventListener("mousedown",pulsarTecla);
    document.getElementById("x").addEventListener("mouseup",soltarTecla);

    document.getElementById("-").addEventListener("mousedown",pulsarTecla);
    document.getElementById("-").addEventListener("mouseup",soltarTecla);

    document.getElementById("+").addEventListener("mousedown",pulsarTecla);
    document.getElementById("+").addEventListener("mouseup",soltarTecla);

    document.getElementById("=").addEventListener("mousedown",pulsarTecla);
    document.getElementById("=").addEventListener("mouseup",soltarTecla);
  
    document.getElementById("borrar").addEventListener("mousedown",pulsarTecla);
    document.getElementById("borrar").addEventListener("mouseup",soltarTecla);


   

})

function pulsarTecla (){

   this.classList.add("sombreado");

    actualizarDisplay(this.id);
}

function soltarTecla(){

    this.classList.remove("sombreado");

}

function actualizarDisplay(digito){

    var pantalla = document.querySelector("input");
    var totalDigitos = pantalla.value.length;
 
    if(pantalla.value == 0) pantalla.value = "";

    
    if(digito == "C"){

        pantalla.value = 0;


    }else if (digito == "="){

        calcular(pantalla.value);

    }else if (digito =="borrar") {

        if(pantalla.value.length > 1){

            pantalla.value = pantalla.value.substring(0 , totalDigitos -1);

        }else{

            pantalla.value = 0;
        }

    } else{

        /* Si recibe una opcion no numerica */
        if(isNaN(digito)){

            /* Concatenamos siempre que el valor previo no sea un operador */
            if(!isNaN(pantalla.value.charAt(totalDigitos -1))){

                pantalla.value += digito;
    
            }

        /* Si recibe un numero concatenamos */
        }else{

            pantalla.value += digito;
    
        }   
 
    }  
}





