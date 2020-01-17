function cargar() {

    elementoOrigen = document.getElementById('portero');
    elementosDestino = document.getElementsByClassName('jugadorReserva');

    portero.addEventListener('dragstart', comienzaArrastre);

    for(element of elementosDestino){

        element.addEventListener('dragenter',function(e) {
            e.preventDefault();
        });
        element.addEventListener('dragover',function(e) {
            e.preventDefault();
        });
        element.addEventListener('drop',soltado);
    }
}

function soltado(e){

    e.preventDefault();
    
    elementosDestino[0].innerHTML = e.dataTransfer.getData("Text");

}


function comienzaArrastre(e){

    let codigo = "<img src='" + elementoOrigen.getAttribute('src') + "'>";

    e.dataTransfer.setData("Text", codigo);

}

let elementoOrigen ;
let elementosDestino;

window.addEventListener("load", cargar);