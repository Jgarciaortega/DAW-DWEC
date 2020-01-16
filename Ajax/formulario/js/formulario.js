var datos = new Array();
let nombre;
let apellidos;
let email;
let password;
let dni;

window.addEventListener('load', init);

function init() {

    document.getElementById('nombre').addEventListener('blur', comprobarNombre);
    document.getElementById('apellidos').addEventListener('blur', comprobarApellidos);
    document.getElementById('email').addEventListener('blur', comprobarEmail);
    document.getElementById('DNI').addEventListener('blur', comprobarDNI);
    document.getElementById('password').addEventListener('blur', comprobarPassword);
    document.querySelector('button').addEventListener('click', tratarDatos);

}

function comprobarNombre() {

    nombre = this.value;

}

function comprobarApellidos() {


    apellidos = this.value;
}

function comprobarEmail() {


    email = this.value;
}

function comprobarPassword() {

    password = this.value;
}


function comprobarDNI() {

    dni = this.value;

}


function tratarDatos() {

    let formulario = new FormData();
    let init = {
        method: 'POST',
        body: formulario
    };
    let request = new Request('php/registro.php', init);

    fetch(request)
        .then(response => response.json())
        .then(dato => {
            if (dato === 'error')
                alert('Error');

            else alert('ok');


        })
    rellenarFormulario(formulario);



}

function rellenarFormulario(formulario) {


    formulario.append('nombre', nombre);
    formulario.append('apellidos', apellidos);
    formulario.append('dni', dni);
    formulario.append('password', password);


}


