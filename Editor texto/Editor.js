window.onload = init;

function init() {

    document.querySelector('button[name="color"]').addEventListener('click', colorTexto);
    document.querySelector('button[name="color_fondo"]').addEventListener('click', colorFondo);
    document.querySelector('button[name="negrita"]').addEventListener('click', negrita);
    document.querySelector('button[name="cursiva"]').addEventListener('click', cursiva);
     document.querySelector('input').addEventListener('select',obtenerTexto);

}

function colorTexto() {

  
    



}

function colorFondo() {

   

}

function negrita() {

   
}

function cursiva() {

    
}


function obtenerTexto(e){

  console.log(e);
}
