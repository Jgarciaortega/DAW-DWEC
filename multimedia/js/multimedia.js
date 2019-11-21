

function init() {

    document.getElementById('play').addEventListener('click', play);
    document.getElementById('reiniciar').addEventListener('click', reiniciar);
    document.getElementById('mute').addEventListener('click', mutear);
    document.getElementById('volUp').addEventListener('click', modificarVolumen);
    document.getElementById('volDown').addEventListener('click', modificarVolumen);


}

function play() {

    document.querySelector('video').play();

}

function mutear() {

    let video = document.querySelector('video');

    if(video.muted){

        video.muted = false;

    }else{

        video.muted = true;
    }
   
}

function reiniciar(){

    document.querySelector('video').load();
    play();
    
}

function modificarVolumen(){

    let video = document.querySelector('video');

    //TODO Tratar la excepcion de index size volume
     if(this.id == 'volUp' && video.volume <1) video.volume += 0.1;

     if(this.id == 'volDown' && video.volume >0) video.volume -= 0.1; console.log(video.volume);

}

window.onload = init;