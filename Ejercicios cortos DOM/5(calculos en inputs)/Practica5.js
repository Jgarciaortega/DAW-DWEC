window.onload = init;



function init(){

    const botonCuadrado = document.getElementById('botonCuadrado');
    const botonMitad = document.getElementById('half-button');
    const botonSiguiente = document.getElementById('porcentaje1');
    const botonPorcentaje = document.getElementById('porcentaje2');
    const botonArea = document.getElementById('area');


    botonCuadrado.addEventListener('click', calcularCuadrado);
    botonMitad.addEventListener('click', calcularMitad);
    botonSiguiente.addEventListener('click', calcularCuadrado);
    botonPorcentaje.addEventListener('click', calcularCuadrado);
    botonArea.addEventListener('click', calcularCuadrado);


}


function calcularCuadrado(){

    
    let num = document.getElementById('cuadrado');
  
    pintarSolucion( num.value * num.value);
  
   
}

function calcularMitad(){

    let num = document.getElementById('half-input');
    
    pintarSolucion(num.value / 2);


}

function pintarSolucion(resultado){

    let solucion = document.getElementById('Solucion');

    solucion.innerText = resultado;

}

