window.onload = function () {

    crearTablero();
}

var turnoCPU = false;




function crearTablero() {

    const nodoPadre = document.querySelector("#tablero");
    const nodoHeader = document.querySelector("#header");

    let texto = document.createTextNode("3 en Raya");
    nodoHeader.appendChild(texto);

    for (let y = 0; y < 3; y++) {

        for (let x = 0; x < 3; x++) {

            let casilla = document.createElement("div");
            casilla.setAttribute("class", "casilla");
            casilla.setAttribute("id", y + " " + x);
            casilla.addEventListener("mousedown", marcarCasilla);
            // casilla.classList.add("casilla");
            nodoPadre.appendChild(casilla);

        }

    }


}

function marcarCasilla(e) {

    const div = e.target;

    setTimeout(eligeCPU, 1000);

    if (!turnoCPU) {

        div.classList.add("cruz");
        turnoCPU = true;
    }

}


function eligeCPU() {

    let tablero = document.querySelectorAll(".casilla");
    console.log(tablero);
    let cont = 0;

    for (let y = 0; y < 3; y++) {

        for (let x = 0; x < 3; x++) {

            let div = document.getElementById(y + " " + x);

            if (div.classList.contains("circulo")){

                if(x != 2){

                    let div2 = document.getElementById(y + " " + x+1);                
                    div2.classList.add("circulo");
                } 

            }else{

                
            }

        }
    }


    turnoCPU = false;
}






