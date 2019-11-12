window.onload = init;


function init() {

    const button = document.querySelector('button');
    button.addEventListener('click', modificarTabla);
}

function modificarTabla() {

    const tbody = document.querySelector('tbody');
    const children = tbody.children;
    let fila = obtenerFila();
    let col = obtenerCol();
    let text = obtenerTexto();
    let datosFila;


    for (let i = 0; i < children.length; i++) {

        if (i == fila) {

            datosFila = children[i].children;

        }

    }

    for (let x = 0; x < datosFila.length; x++) {

        if (x == col) {

            let nodoAEliminar = datosFila[x].firstChild;
            let nodoPadre = nodoAEliminar.parentNode;

            nodoPadre.removeChild(nodoAEliminar);

            texto = document.createTextNode(text);
            datosFila[x].appendChild(texto);

        }

    }
}


function obtenerFila() {

    let inputs = document.querySelectorAll('input');

    return inputs[0].value;

}

function obtenerCol() {

    let inputs = document.querySelectorAll('input');

    return inputs[1].value;

}

function obtenerTexto(){

    let inputs = document.querySelectorAll('input');

    return inputs[2].value;


}