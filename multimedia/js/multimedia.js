

function init() {

    videoRunning = false;
   
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

}

function crearBanner() {

    let banner = document.createElement('div');
    let p = document.createElement('p');
    let textBanner = document.createTextNode('Ponga aquí su publicidad');

    banner.setAttribute('id', 'banner');
    p.setAttribute('id', 'textBanner');
    p.appendChild(textBanner);
    banner.appendChild(p);
    document.getElementById('display').appendChild(banner);

    setTimeout(quitarBanner, 10000);
    setTimeout(muestraCierreBanner, 3000);
    
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
    if(!videoRunning){

        document.getElementById('play').setAttribute('id','pause');
        videoRunning=true;
    }

    crearBanner();
}

function modificarTiempo() {

    if (this.id == 'rew') video.currentTime -= 10;
    if (this.id == 'for') video.currentTime += 10;

}


function play() {

    if (!videoRunning) {

        videoRunning = true;
        video.play();
        this.setAttribute('id', 'pause');
        crearBanner();    

    } else {

        videoRunning = false;
        video.pause();
        this.setAttribute('id', 'play')

    }
}

function mutear() {

    if (video.muted) {

        video.muted = false;

    } else {

        video.muted = true;
    }
}
function reiniciar() {

    video.load();
    play();
}

function modificarVolumen() {

    //TODO Tratar la excepcion de index size volume
    if (this.id == 'volUp' && video.volume < 1) video.volume += 0.1;

    if (this.id == 'volDown' && video.volume > 0) video.volume -= 0.1;

}

//VARIABLES GLOBALES
let bannerRunning;
let video;

window.onload = init;