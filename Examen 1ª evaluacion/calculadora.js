/*
document.addEventListener("click", function () {
    document.getElementById("caja").addEventListener("mousedown", prueba);
    alert("hola");

})*/

document.addEventListener("DOMContentLoaded", function() {
    //document.getElementsByClassName("boton").addEventListener("click",sombrea);
    document.getElementById("7").addEventListener("click",sombrea);
    
})



function sombrea (){

   this.classList.add("sombreado");
    
}



