var datos = new Array();

window.addEventListener('load', init);

function init() {

    
    document.getElementById('nombre').addEventListener('blur', comprobarNombre);
    document.getElementById('apellidos').addEventListener('blur', comprobarApellidos);
    document.getElementById('email').addEventListener('blur', comprobarEmail);
    document.getElementById('DNI').addEventListener('blur', comprobarDNI);
    document.getElementById('password').addEventListener('blur', comprobarPassword);
    document.getElementById('password2').addEventListener('blur', passwordCoincide);
    document.querySelector('button').addEventListener('click', tratarDatos);
   
}

function comprobarNombre() {

    var expresion_regular_nombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

    if (!expresion_regular_nombre.test(this.value)) {

        datos[0] = "Error";

    } else {

        datos[0] = this.value;
    }

}

function comprobarApellidos() {

    var expresion_regular_apellidos = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

    if (!expresion_regular_apellidos.test(this.value)) {

        datos[1] = "Error";

    } else {

        datos[1] = this.value;
    }

}

function comprobarEmail() {

    var expresion_regular_email = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!expresion_regular_email.test(this.value)) {

        datos[2] = "Error";

    } else {

        datos[2] = this.value;
    }
}

function comprobarPassword() {

    var expresion_regular_pass = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

    if (!expresion_regular_pass.test(this.value)) {

        datos[5] = "Error";

    } else {

        datos[5] = this.value;
    }
}

function passwordCoincide() {

    if (datos[5] == this.value) {

        datos[4] = this.value;

    } else {

        datos[4] = "Error";
    }


}

function comprobarDNI() {

    var expresion_regular_dni;
    var index;
    const letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var letra;
    var dniFormateado = "";

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(this.value)) {

        index = this.value.substring(0, 8) % 23;
        letra = this.value.substring(8, 9).toUpperCase();

        if (letrasDNI[index] == letra) {

            for (let i = 0; i < 8; i++) {

                dniFormateado += this.value.charAt(i);

                if (i == 1) dniFormateado += ".";
                if (i == 4) dniFormateado += ".";
                if (i == 7) dniFormateado += this.value.charAt(8).toUpperCase();

            }

            datos[3] = dniFormateado;

        } else {

            datos[3] = "Error";
        }


    } else {

        datos[3] = "Error";
    }

}

function rellenarFormulario() {

    var objetosInput = new Array();
    var errorInputs = "";
    var hayErrores = false;

    objetosInput.push(document.getElementById('nombre'));
    objetosInput.push(document.getElementById('apellidos'));
    objetosInput.push(document.getElementById('email'));
    objetosInput.push(document.getElementById('DNI'));
    objetosInput.push(document.getElementById('password'));
    objetosInput.push(document.getElementById('password2'));
    objetosInput.push(document.getElementById('IP'));


    for (i = 0; i < datos.length; i++) {

        objetosInput[i].value = datos[i];

        if (datos[i] == "Error") {

            errorInputs += asignarError(objetosInput[i], i) + " ";
            objetosInput[i].value = "Error";
            objetosInput[i].style.color = "red";
            hayErrores = true;

        }
    }


    if (hayErrores) {

        alert("Atención! Hay errores en los siguientes campos :" + errorInputs);

    } else {

        if (datos[i].length > 0) {

            alert("Formulario enviado exitósamente!");

        }

    }

}

function asignarError(input, index) {

    switch (index) {

        case 0: return "nombre";
        case 1: return "apellidos";
        case 2: return "e-mail";
        case 3: return "DNI";
        case 4: return "password";
        case 5: return "confirmación de password";
        case 6: return "IP";
    }

}

function tratarDatos(){

    // var formulario = new FormData(document.getElementById("formulario"));

     let ruta = 'http://localhost/Ajax/formulario/registro.php?'
                +'nombre='+datos[0]
                +'apellidos='+datos[1]
                +'email='+datos[2];
                +'DNI='+datos[3];
                +'password='+datos[4];

     let metodo = 'GET';
     let envio = null;
     let xml = false;

     console.log(ruta);

    enviar(metodo,ruta,envio,xml,guardarRegistro);

}

function enviar(metodo, ruta, envio, xml, funcion) {

    //Obtener la instancia del objeto XMLHttpRequest
     let peticion_http = new XMLHttpRequest();
     
      if(xml)peticion_http.overrideMimeType('text/xml');
     //  Preparar la función de respuesta
      peticion_http.onreadystatechange = mostrar;
     //  Realizar petición HTTP
      peticion_http.open(metodo, ruta, true);
      peticion_http.send();
 
      function mostrar() {
 
          if (peticion_http.readyState == 4 && peticion_http.status == 200) {                    
             
              if (xml) {
                funcion(peticion_http.responseXML);
             } else funcion(peticion_http.responseText);
         }
      }
 }

 function guardarRegistro(){


 }
