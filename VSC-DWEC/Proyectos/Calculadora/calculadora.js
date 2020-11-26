import { Operacion } from './objetoOperacion.js';
var operacion = new Operacion();
var cajaTexto = document.getElementById("cajaTexto");
var reset = false;
var visibleCent = false;
cajaTexto.value = "0";


var grabarHistorial = (strOperacion) => {
    let operacionCompleta = `<h2>${strOperacion}</h2><h1>${operacion.resultado}</h1><br>`;
    let historial = document.getElementsByClassName("historial")[0];
    historial.innerHTML += (operacionCompleta);
}

var escribir = (evento) => {
    let elemento = evento.srcElement;

    //Si se quiere realizar una operacion y en la consola hay un valor no numerico se mostrara un 0
    if (isNaN(cajaTexto.value) && (cajaTexto != "-" && isNaN(elemento.value)))
        cajaTexto.value = "0";

    /*
    Si se pulso un numero, un punto o un menos se escribira por consola si supera ciertos requisitos
    y por ultimo si se quiere realizar una operacion o resolver.
    */if (elemento.value >= 0 && elemento.value <= 9) {
        if (cajaTexto.value == "0" || reset) {
            cajaTexto.value = "";
            reset = false;
        }
        if (cajaTexto.value.length < 10)
            cajaTexto.value += elemento.value;

    } else if (elemento.value == ".") {
        if (cajaTexto.value.length <= 8 && cajaTexto.value.length > 0 && cajaTexto.value.indexOf(".") == -1 && operacion.operacion != "EXP")
            cajaTexto.value += elemento.value;

    } else if (elemento.value == "-" && (cajaTexto.value == "0" || reset)) {
        cajaTexto.value = "-";
        reset = false;

    } else if (elemento.value == "pi" && (cajaTexto.value == "0" || reset)) {
        cajaTexto.value = Math.PI;
        reset = false;

    } else {
        /*
        Esta parte de la funcion se divide en tres partes: operaciones de 1 parametro,
        operaciones de 2 parametros y resolver operacion.

        La operacion de un solo parametro se resuelven al pulsar en el simbolo de la misma operacion 
        y se muestra por consola.

        La operacion de dos parametros se pueden resolver despues de pulsar el simbolo "=" 
        o si se encadenan operaciones. 

        Al pulsar "=" para resolver si cumple ciertos requisitos se muestra por consola.
        */
        let cajaNumero = parseFloat(cajaTexto.value);
        let strOperacion = `${operacion.numero1} ${operacion.operacion} ${cajaNumero} =`
        //if (!reset || elemento.value == "cent") {
        switch (elemento.value) {
            case "ac":
                operacion.fncReset();
                operacion.resultado = undefined;
                cajaTexto.value = "0";
                break;
            case "cent":
                let teclasCent = document.getElementById("teclas-cientificas");
                if (!visibleCent) {
                    teclasCent.style.display = "flex";
                    visibleCent = true;
                }
                else {
                    teclasCent.style.display = "none";
                    visibleCent = false;
                }
                break;
            case "+/-":
            case "√":
            case "x!":
            case "ln":
            case "log":
            case "cos":
            case "tan":
            case "sin":
                strOperacion = `${elemento.value} (${cajaNumero}) =`
                operacion.numero1 = cajaNumero;
                operacion.operacion = elemento.value;
                cajaTexto.value = operacion.fncResultado(0);
                grabarHistorial(strOperacion);
                reset = true;
                break;
            case "=":
                cajaTexto.value = operacion.fncResultado(cajaNumero);
                grabarHistorial(strOperacion);
                reset = true;
                break;
            case "+":
            case "-":
            case "%":
            case "/":
            case "*":
            case "^":
            case "EXP":
                if (operacion.numero1 != undefined) {
                    cajaTexto.value = operacion.fncResultado(cajaNumero);
                    grabarHistorial(strOperacion);

                    cajaNumero = operacion.resultado;
                }
                operacion.operacion = elemento.value;
                operacion.fncOperacion(cajaNumero);
                reset = true;
                break;
        }
        //}
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