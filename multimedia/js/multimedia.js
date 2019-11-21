

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
    
}


function modificarTiempo(){

    if(this.id == 'rew') video.currentTime-=10;
    if(this.id == 'for') video.currentTime+=10;

}


function play() {

    if(!videoRunning){

        videoRunning = true;
        video.play();
        this.setAttribute('id','pause');
       

    }else{

        videoRunning = false;
        video.pause();
        this.setAttribute('id','play');
        
    } 
   
}

function mutear() {


    if(video.muted){

        video.muted = false;

    }else{

        video.muted = true;
    }

}

function reiniciar(){

    video.load();
    play();
    
}

function modificarVolumen(){

    //TODO Tratar la excepcion de index size volume
     if(this.id == 'volUp' && video.volume <1) video.volume += 0.1;

     if(this.id == 'volDown' && video.volume >0) video.volume -= 0.1; console.log(video.volume);

}

//VARIABLES GLOBALES
let video;
let videoRunning;

window.onload = init;