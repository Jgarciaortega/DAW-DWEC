

function init() {

    videoRunning = false;
    bannerActivo = false;
    contadorSeg = 10;

    video = document.querySelector('video');
    document.getElementById('play').addEventListener('click', play);
    document.getElementById('reiniciar').addEventListener('click', reiniciar);
    document.getElementById('mute').addEventListener('click', mutear);
    document.getElementById('volUp').addEventListener('click', modificarVolumen);
    document.getElementById('volDown').addEventListener('click', modificarVolumen);
    document.getElementById('rew').addEventListener('click', modificarTiempo);
    document.getElementById('for').addEventListener('click', modificarTiempo);

    let videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('click', runVideo);
        actualizarFrame(video);
    });

     document.getElementById('display').addEventListener('mouseover', mostrarBotonera);
     document.getElementById('display').addEventListener('mouseout', quitarBotonera);
}

function quitarBotonera(){

    if(!bannerActivo) this.lastElementChild.classList.remove('controlVisible');
    

}

function mostrarBotonera(){

    if(!bannerActivo) this.lastElementChild.classList.add('controlVisible');

}


function cuentaAtras() {

    let banner = document.getElementById('banner');
    let cuentaAtras;

    if(contadorSeg == 10){

        cuentaAtras = document.createElement('div');
        cuentaAtras.setAttribute('id','cuentaAtras');

    }else{

       cuentaAtras = document.getElementById('cuentaAtras');
    }

    cuentaAtras.innerHTML = contadorSeg;
    banner.appendChild(cuentaAtras);
    
    if (contadorSeg > -1) {

        contadorSeg -= 1;
        setTimeout("cuentaAtras("+ contadorSeg +")", 1000);
        
    }else{

        banner.removeChild(cuentaAtras);
    }
    
}

function crearBanner() {

    let banner = document.createElement('div');
    banner.setAttribute('id', 'banner');
    let p = document.createElement('p');
    let textBanner = document.createTextNode('Ponga aquí su publicidad');

    banner.setAttribute('id', 'banner');
    p.setAttribute('id', 'textBanner');
    p.appendChild(textBanner);
    banner.appendChild(p);
    document.getElementById('display').appendChild(banner);

    if (!bannerActivo) {

        setTimeout(muestraCierreBanner, 11000);
        bannerActivo = true;
        cuentaAtras();
    }

}

function muestraCierreBanner() {

    let banner = document.getElementById('banner');
    let botonCierre = document.createElement('button');

    botonCierre.setAttribute('id', 'cerrarBanner');
    botonCierre.innerHTML = "X";
    botonCierre.addEventListener('click', quitarBanner);
    banner.appendChild(botonCierre);

}

function quitarBanner() {

    let nodoDisplay = document.getElementById('display');
    let nodoBanner = nodoDisplay.lastChild;

    nodoDisplay.removeChild(nodoBanner);
    bannerActivo = false;

}

//Para mostrar algo de imagen adelanto un poco el tiempo de los videos
function actualizarFrame(video) {

    video.currentTime += 2;
}

//Funcion que intercambia el video por otro del navegador
function runVideo() {

    //Tengo los dos videos (en reproduccion y seleccionado)
    let videoPpal = document.getElementById('enReproduccion');
    let videoSec = this;

    //Localizo sus url
    let urlPpal = videoPpal.childNodes[1].src;
    let urlSec = videoSec.childNodes[1].src;

    //Intercambio entre ellos las url
    videoPpal.childNodes[1].setAttribute('src', urlSec);
    videoSec.childNodes[1].setAttribute('src', urlPpal);

    //Cargo video y le doy autoplay
    videoPpal.load();
    videoPpal.play();

    videoSec.load();
    actualizarFrame(videoSec);

    //Modifico boton play/pause si no esta previamente en play
    if (!videoRunning) {

        document.getElementById('play').setAttribute('id', 'pause');
        videoRunning = true;
    }

}

function modificarTiempo() {

    if (!bannerActivo) {

        if (this.id == 'rew') video.currentTime -= 10;
        if (this.id == 'for') video.currentTime += 10;

    }
}

function play() {

    if (!bannerActivo) {

        if (!videoRunning) {

            videoRunning = true;
            video.play();
            this.setAttribute('id', 'pause');
            crearBanner();

        } else {

            videoRunning = false;
            video.pause();
            this.setAttribute('id', 'play'); 
        }
    }
}

function mutear() {

    if (!bannerActivo) {

        if (video.muted) {

            video.muted = false;

        } else {

            video.muted = true;
        }
    }
}
function reiniciar() {

    if (!bannerActivo) {

        video.load();
        play();
    }

}

function modificarVolumen() {

    if (!bannerActivo) {

        //TODO Tratar la excepcion de index size volume
        if (this.id == 'volUp' && video.volume < 1) video.volume += 0.1;

        if (this.id == 'volDown' && video.volume > 0) video.volume -= 0.1;
    }

}

//VARIABLES GLOBALES

let video;
let bannerActivo;
let contadorSeg;

window.onload = init;