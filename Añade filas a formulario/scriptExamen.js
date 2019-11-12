window.onload = init;


function init() {

    const button = document.querySelector('#botonAnyadir');

    button.addEventListener('click', generarFormulario);
}


function generarFormulario() {

    const nodoPrincipal = document.getElementById('principal');
    let nodoFormulario = document.createElement('div');
    let nodoBotones = document.createElement('div');
    const arrayTitulos = ['DNI', 'NOMBRE', 'APELLIDOS'];

    nodoFormulario.classList.add('formulario');
    nodoBotones.classList.add('botones');

    nodoPrincipal.appendChild(nodoFormulario);
    nodoPrincipal.appendChild(nodoBotones);

    for (let i = 0; i < 3; i++) {

        let titulo = document.createElement('span');
        let texto = document.createTextNode(arrayTitulos[i]);

        titulo.appendChild(texto);
        titulo.classList.add('titulo');

        nodoFormulario.appendChild(titulo);
    }

    for (let i = 0; i < 3; i++) {

        let input = document.createElement('input');
        input.setAttribute('readonly', 'readonly');
        input.setAttribute('type', 'text');
        nodoFormulario.appendChild(input);

    }


    let button1 = document.createElement('button');
    button1.classList.add('editar');
    button1.addEventListener('mousedown', function () {

        let inputs = nodoFormulario.children;
        for (let i = 0; i < inputs.length; i++) {

            inputs[i].removeAttribute('readonly');

        }

    });
    nodoBotones.appendChild(button1);

    let button2 = document.createElement('button');
    button2.classList.add('eliminar');
    button2.addEventListener('click', function () {

        let inputs = nodoFormulario.children;

        let dni = inputs[3].value;
        let nombre = inputs[4].value;
        let apellidos = inputs[5].value;

        if (dni != "" && nombre != "" && apellidos != "") {

            let opcion = confirm("¿Estas seguro de borrar a " + nombre +" "+ apellidos + " con DNI "
            +dni + "?");

            if (opcion) {

                nodoFormulario.remove(this.firstChild);
                nodoBotones.remove(this.firstChild);

            }

        }else{

            alert("Atencion no es posible borrar un input sin todos los datos introducidos")
        }


    });
    nodoBotones.appendChild(button2);

}

