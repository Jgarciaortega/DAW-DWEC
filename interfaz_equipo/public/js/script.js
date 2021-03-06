
function cargar() {

    let jugadores = document.getElementsByClassName('jugador');

    for (jugador of jugadores) {

        //jugador.addEventListener('dragover', allowDrop);
        jugador.addEventListener('drop', drop);
        jugador.addEventListener('dragstart', drag);

    }

}

function allowDrop(ev) {

    console.log(ev);
    //Permitir que reciba algún elemento
     ev.preventDefault();

}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

    let jugadores = document.getElementsByClassName('jugador');

    for(jugador of jugadores){
        
        if(jugador.hasChildNodes){

            jugador.addEventListener('dragover', allowDrop);
        } 
    }

}

function drop(ev) {


    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    let data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    if(!ev.target.draggable){
        ev.target.appendChild(document.getElementById(data));
    }
    


}


window.addEventListener("load", cargar);