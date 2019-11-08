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
    let divValido = false;

    while (!divValido) {

        let y = Math.floor(Math.random() * (3));
        let x = Math.floor(Math.random() * (3));

        console.log(x + " " + y);
        let div = document.getElementById(y + " " + x);

        if (!div.classList.contains("circulo") && !div.classList.contains("cruz")) {

            div.classList.add("circulo");
            divValido = true;

        }

    }
    turnoCPU = false;
}



function comprobarVictoria() {

    let contCirculo = 0;
    let contCruz = 0;

    //COMPROBACION HORIZONTAL

    for (let x = 0; x < 3; x++) {

        for (let y = 0; y < 3; y++) {

            let casilla = document.getElementById(y + " " + x);

            

        }

    }

    //COMPROBACION VERTICAL


    for (let x = 0; x < 3; x++) {

        for (let y = 0; y < 3; y++) {

            

        }

    }

    //COMPROBACION DIAGONAL

    for (let x = 0; x < 3; x++) {

        for (let y = 0; y < 3; y++) {

            

        }

    }


}
