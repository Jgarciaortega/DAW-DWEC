window.onload = init;


function init() {

    const nodoBody = document.querySelector('body');
    let row = document.createElement('tr');
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    table.appendChild(row);

    for (let i = 0; i < 4; i++) {

        let title = document.createElement('th');
        let texto = document.createTextNode("TITULO" + " " + i);
        title.appendChild(texto);
        row.appendChild(title);
        table.appendChild(row);

    }

    nodoBody.appendChild(table);

    const boton = document.querySelector('button[name="boton"]');

    boton.addEventListener('click', anyadeFila);

}


function anyadeFila() {

    const table = document.querySelector('table');

    let row = document.createElement('tr');

    for (let i = 0; i < 4; i++) {

        let data = document.createElement('td');
        let texto = document.createTextNode("DATOS " + i)
        data.appendChild(texto);
        row.appendChild(data);

    }

    table.appendChild(row);

}
""