//Variables Globales
let circle = document.querySelector(".container .card .percent svg circle:nth-child(2)")


//Metodos
eventListeners()

//Todos los metodos y eventos
function eventListeners() {
    
    estiloCirculo();
}

//Añadiendo estilo al circulo
function estiloCirculo() {
    
    //Variables    
    let porcentaje = 95
    
    //Aplicacion del estilo al circulo
    //circle.style = `stroke-dashoffset: ${(440 - (440 * porcentaje) / 100)};`;
    //document.querySelector(".dot").style = `transform: rotate(${3.6 * porcentaje}deg);`
}

