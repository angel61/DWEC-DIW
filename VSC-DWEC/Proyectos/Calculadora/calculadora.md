# Trabajo calculadora - Ángel López Palacios

El proyecto se basa en realizar una calculadora funcional utilizando js con modulos y POO.

***

## Archivo calculadora.js

En calculadora.js simplemente se inicializa el evento para cada tecla de la calculadora.
Y el evento consistira en comprobar que tecla se pulso y segun la tarea que desempeñe en la calculadora realiza una funcion u otra.

Funcion asociada al evento click que tienen todas la teclas:

~~~JavaScript
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
    let operacionMultiNumero = ((valor === "-") && (menosEsOperador)) || valoresOperadorMulti.includes(valor);

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
~~~

***

## Archivo objetoOperacion.js

Este archivo contiene el objeto Operacion utilizado para realizar comprobaciones sobre los valores recibidos y tambien realizar operaciones matematicas.

- Funciones para realizar operaciones
    - fncOperacion
    - fncFactorial
    - fncReset
    - fncResultado
    - fncResultadoNoNumerico
- Funciones de validacion de datos e interaccion con interfaz
    - fncOperacionMonoNumero
    - fncOperacionMultiNumero
    - fncOperacionEncadenada
    - fncIgual
    - fncAC
    - fncCent
    - fncEscribirConsola
    - fncReiniciarConsola
    - fncHistorial
    - getHistorial
