import { Operacion } from './objetoOperacion.js';
var operacion = new Operacion();
var cajaTexto = document.getElementById("cajaTexto");
cajaTexto.value = "0";
var historial = document.getElementsByClassName("historial")[0];
var teclasCent = document.getElementById("teclas-cientificas");
var menosEsOperador = false;

//Funcion que segun el valor que se reciba del evento 
var escribir = (evento) => {
    let valor = evento.srcElement.value;

    //Arrays para determinar el grupo de la tecla.
    let valoresEscribir = [".", "pi"];
    let valoresOperadorMono = ["+/-", "√", "x!", "ln", "log", "cos", "tan", "sin"];
    let valoresOperadorMulti = ["+", "*", "/", "%", "^", "EXP"];

    if (isNaN(cajaTexto.value) && (cajaTexto.value != "-" && isNaN(valor)))
        cajaTexto.value = "0";

    //Variables booleanas que utilizan los arrays anteriores para determinar la funcion de la tecla en el switch.
    let escribirEnConsola = (valor >= 0 && valor <= 9) || ((valor === "-") && (!menosEsOperador)) || valoresEscribir.includes(valor);
    let operacionMonoNumero = valoresOperadorMono.includes(valor);
    let operacionMultiNumero = ((valor == "-") && (menosEsOperador)) || valoresOperadorMulti.includes(valor);

    switch (true) {
        case escribirEnConsola:
            cajaTexto.value = operacion.fncEscribirConsola(valor);
            if (!isNaN(cajaTexto.value))
                menosEsOperador = true;
            break;
        case (valor === "ac"):
            cajaTexto.value = operacion.fncAC();
            menosEsOperador = false;
            break;
        case (valor === "cent"):
            teclasCent.style.display = operacion.fncCent();
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

            menosEsOperador = false;
            break;
    }
}

//Se añade la funcion escribir a cada boton. 
var inicializarEventos = () => {
    let botonAux;
    let arrayBotones = document.getElementsByName("btn");
    for (let i = 0; i < arrayBotones.length; i++) {
        botonAux = arrayBotones[i];
        botonAux.addEventListener("click", escribir);
    }
}

inicializarEventos();