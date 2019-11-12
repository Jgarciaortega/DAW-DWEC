window.onload = init;


function init(){

    let button = document.querySelector('button');

    button.addEventListener('click', modificarTexto);


}


function modificarTexto(){

    let texto = document.getElementById('text');

    texto.classList.add('textoModificado');
}