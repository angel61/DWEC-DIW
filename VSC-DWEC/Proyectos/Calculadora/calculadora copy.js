
var numero1 = -1;
var operacion;
var cajaTexto = document.getElementById("cajaTexto");
var reset = false;
cajaTexto.value = "0";
/*var fncSuma = () => {
    let value = cajaTexto.value;
    if (numero1 == -1) {
        numero1 = parseFloat(value);
        operacion = fncSuma;
        reset=true;
    } else {
        let resultado = numero1 + parseFloat(value);
        return resultado;
    }
}
var fncResta = () => {
    let value = cajaTexto.value;
    if (numero1 == -1) {
        numero1 = parseFloat(value);
        operacion = fncResta;
        reset=true;
    } else {
        let resultado = numero1 - parseFloat(value);
        return resultado;
    }
}
var fncDiv = () => {
    let value = cajaTexto.value;
    if (numero1 == -1) {
        numero1 = parseFloat(value);
        operacion = fncDiv;
        reset=true;
    } else {
        let resultado = numero1 / parseFloat(value);
        return resultado;
    }
}
var fncProd = () => {
    let value = cajaTexto.value;
    if (numero1 == -1) {
        numero1 = parseFloat(value);
        operacion = fncProd;
        reset=true;
    } else {
        let resultado = numero1 * parseFloat(value);
        return resultado;
    }
}
var fncResto = () => {
    let value = cajaTexto.value;
    if (numero1 == -1) {
        numero1 = parseFloat(value);
        operacion = fncResto;
        reset=true;
    } else {
        let resultado = numero1 % parseFloat(value);
        return resultado;
    }
}*/
var fncOperacion = (operacionResultado) => {
    let value = cajaTexto.value;
    if (numero1 == -1) {
        numero1 = parseFloat(value);
        reset = true;
    } else {
        let resultado;
        switch (operacionResultado) {
            case "+": resultado = numero1 + parseFloat(value); break;
            case "-": resultado = numero1 - parseFloat(value); break;
            case "/": resultado = numero1 / parseFloat(value); break;
            case "*": resultado = numero1 * parseFloat(value); break;
            case "%": resultado = numero1 % parseFloat(value); break;
        }
        return resultado;
    }
}
var fncReset = () => {
    cajaTexto.value = "0";
    numero1 = -1;
}
var fncResultado = () => {
    if (numero1 != -1) {
        cajaTexto.value = fncOperacion(operacion);
        numero1 = -1;
    }
}

var escribir = function (evento) {
    let elemento = evento.srcElement;
    if (elemento.value == "ac")
        fncReset();
    if (isNaN(cajaTexto.value))
        cajaTexto.value = "";
    if (elemento.value >= 0 && elemento.value <= 9) {
        if (cajaTexto.value == "0" || reset) {
            cajaTexto.value = "";
            reset = false;
        }
        if (cajaTexto.value.length < 10)
            cajaTexto.value += elemento.value;
    } else if (elemento.value == ".") {
        if (cajaTexto.value.length < 8 && cajaTexto.value.length > 0 && cajaTexto.value.indexOf(".") == -1) {
            cajaTexto.value += elemento.value;
        }

    } else {
        if (parseFloat(cajaTexto.value) > 0) {
            /*
            switch (elemento.value) {
                case "+": operacion="+"; break;
                case "-": operacion="-"; break;
                case "/": operacion="/"; break;
                case "*": operacion="*"; break;
                case "%": operacion="%"; break;
                case "=": fncResultado(); break;
            }*/
            if (elemento.value != "=") {
                operacion = elemento.value;
                fncOperacion(operacion);
            } else {
                fncResultado();
            }
        }
    }
}
var inicializarEventos = () => {
    let botonAux;
    let arrayBotones = document.getElementsByName("btn");
    for (let i = 0; i < arrayBotones.length; i++) {
        botonAux = arrayBotones[i];
        botonAux.addEventListener("click", escribir);
    }
}
inicializarEventos();