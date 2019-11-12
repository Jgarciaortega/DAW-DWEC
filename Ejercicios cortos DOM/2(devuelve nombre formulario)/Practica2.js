window.onload = init

function init() {
    // let boton2 = document.querySelector('input[type="submit"]');
    // boton2.addEventListener('mouseup', getFormvalue);
}

function getFormvalue() {
    let nombre = document.querySelector('input[name="nombre"]');
    let apellidos = document.querySelector('input[name="apellidos"]');
    console.log(nombre.value + ", " + apellidos.value);

}