import { Operacion } from './objetoOperacion.js';
var operacion = new Operacion();
var cajaTexto = document.getElementById("cajaTexto");
cajaTexto.value = "0";
var historial = document.getElementsByClassName("historial")[0];
var teclasCent = document.getElementById("teclas-cientificas");

var menosEsOperador=false;


var escribir = (evento) => {
    let valor = evento.srcElement.value;

    if (isNaN(cajaTexto.value) && (cajaTexto.value != "-" && isNaN(valor)))
        cajaTexto.value = "0";

    let escribirEnConsola = (valor >= 0 && valor <= 9) || (valor === ".") || (valor === "-")&&(!menosEsOperador) || (valor === "pi");
    let operacionMonoNumero = (valor === "+/-") || (valor === "√") || (valor === "x!") || (valor === "ln") || (valor === "log") || (valor === "cos") || (valor === "tan") || (valor === "sin");
    let operacionMultiNumero = (valor === "+") || (valor === "-")&&(menosEsOperador) || (valor === "*") || (valor === "/") || (valor === "%") || (valor === "^") || (valor === "EXP");

    switch (true) {
        case escribirEnConsola:
            cajaTexto.value = operacion.fncEscribirConsola(valor);
            if(!isNaN(cajaTexto.value))
            menosEsOperador=true;
            break;
        case (valor === "ac"):
            cajaTexto.value = operacion.fncAC();
            menosEsOperador=false;
            break;
        case (valor === "cent"):
            if (operacion.fncCent()) {
                teclasCent.style.display = "flex";
            }
            else {
                teclasCent.style.display = "none";
            }
            break;
        case operacionMonoNumero:
            cajaTexto.value = operacion.fncOperacionMonoNumero(valor);
            historial.innerHTML += operacion.getHistorial();
            break;
        case (valor === "="):
            cajaTexto.value = operacion.fncIgual();
            historial.innerHTML += operacion.getHistorial();
            break;
        case operacionMultiNumero:
            cajaTexto.value = operacion.fncOperacionMultiNumero(valor);
            historial.innerHTML += operacion.getHistorial();
            
            menosEsOperador=false;
            break;
    }


}

/*Se añade la funcion escribir a cada boton porque la funcion se basa en recibir el valor del boton 
e interpretar lo que el usuario quiere realizar*/
var inicializarEventos = () => {
    let botonAux;
    let arrayBotones = document.getElementsByName("btn");
    for (let i = 0; i < arrayBotones.length; i++) {
        botonAux = arrayBotones[i];
        botonAux.addEventListener("click", escribir);
    }
}
inicializarEventos();