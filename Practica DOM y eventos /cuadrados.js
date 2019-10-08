 function cambiarACirculo(element) {

            element.classList.add("borderRadius");

        }

        function quitarCirculo(element) {
            
            element.classList.remove("borderRadius");

        }

        function quitarSombra(element) {

            element.classList.add("sinSombra");
            element.classList.remove("conSombra");

        }

        function anyadeSombra(element) {

            element.classList.add("conSombra");
            element.classList.remove("sinSombra");
        }

        function anyadeSombraInterior(element) {

            element.classList.add("conSombraInterior");
            element.classList.remove("sinSombra");
            element.classList.remove("conSombra");
            element.classList.add("siempreCirculo");
    
        }

        function eliminarCuadrado(posicion) {

            var principal = document.getElementById("principal");
            var cubo = document.getElementById(posicion);
            cubo.classList.add("trans");
            
            setTimeout(function(){
                principal.removeChild(document.getElementById(posicion));
            }, 2000);            
            
        }

        function eliminarCuadrado2(boton) {

            boton.style.display="none";
            boton.parentNode.classList.add("trans");
            
            setTimeout(function(){
                boton.parentNode.remove();
            }, 1000);            
            
        }

    