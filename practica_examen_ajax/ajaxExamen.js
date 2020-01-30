

function init(){

    let button = document.querySelector('button');
   
    button.addEventListener('click', download);
    
   
}

function download(){

    let input = document.getElementById('nombre');
    let nombreUsuario = input.value;

    let url = 'http://api.chess.com/pub/player/'+nombreUsuario+'/games';
    console.log(url);
    
    fetch(url)
    .then(response => {

        if(response.ok){

            return response.json();

        }else{

            console.log('Error en la llamada');
        }
    })
    .then(datos => {

        let main = document.querySelector('main');

        console.log(datos.games[0].rated);
        
        for (let i = 0; i < datos.games.length; i++) {
            
            let divPartida = document.createElement('div');

            let p2 = document.createElement('p');
            let gameId = document.createElement('a');
            p2.appendChild(gameId);
            gameId.innerHTML = 'GameId';
            gameId.setAttribute('href',datos.games[i].url);

            let ranked = document.createElement('input');
            let label = document.createElement('label');
            label.innerHTML = 'Ranked';
            ranked.setAttribute('type','checkbox');

            if(datos.games[i].rated == true){

                ranked.setAttribute('checked', true);
            }


            let p = document.createElement('p');
            p.innerHTML = datos.games[i].pgn;

            divPartida.appendChild(p2);
            divPartida.appendChild(label);
            divPartida.appendChild(ranked);
            divPartida.appendChild(p);
            main.appendChild(divPartida);
            
        }



    });
    


}


window.addEventListener('load', init);