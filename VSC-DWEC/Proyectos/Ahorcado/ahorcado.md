# Trabajo ahorcado - Ángel López Palacios

El proyecto es un juego del ahorcado en el cual se encuentra una imagen con el típico dibujo del ahorcado, una caja de texto, un botón para comprobar el valor de la caja de texto, un div para visualizar el resultado y otro div para verificar si el usuario quiere resolver definitivamente la palabra entera.

***

## Función y array para llevar el registro de letras

Si la letra que recibe existe devuelve un boolean como false y si no existe lo guarda en el array y devuelve true.

~~~JavaScript
var historialLetras = [];

var letraUsada = (letra) => {
    if (historialLetras.find(element => element == letra)) {
        return false;
    } else {
        historialLetras.push(letra);
        return true;
    }
}
~~~

***

## Función para comprobar letras usadas y comprobar si se encuentran en la palabra

Si la letra fue usada con anterioridad, avisara al usuario y si no fue usada, comprobara si existe en la palabra a adivinar.

~~~JavaScript
var annadirLetra = (letra) => {
    if (letraUsada(letra)) {
        let posicion = strAdivinar.indexOf(letra);
        if (posicion != -1)
            strPantalla[posicion] = letra;
        else
            vidas--;
        imgVidas.src = `img/ahorcado_${vidas}.png`;
        while (posicion != -1) {
            posicion = strAdivinar.indexOf(letra, posicion + 1);
            strPantalla[posicion] = letra;
        }
    } else {
        alert("La letra ya fue escrita anteriormente.");
    }

    txtPantalla.innerHTML = strPantalla.join(" ");
}
~~~

***

## Función para mostrar el resultado de la partida

La función recibe como parámetros un string con el resultado y el color de fondo.
Muestra el resultado de la partida y deshabilita en input y el botón.

~~~JavaScript
var dialogoResultado = ($titulo, $color) => {
    let hunoResultado = document.getElementById("resultado");
    txtAdivinar.disabled = true;
    btnAdivinar.disabled = true;
    hunoResultado.innerHTML = $titulo;
    hunoResultado.style.backgroundColor = $color;
}
~~~

***

## Evento para adivinar una letra o la palabra entera

Si la letra cumple los requisitos utiliza la función para añadir letras, si el usuario introduce una palabra se le consultara al usuario si quiere intentar resolverla y por último se comprobara si existe "_" en la palabra oculta, si aún quedan vidas o si se ha resuelto la palabra entera con éxito.

~~~JavaScript
var adivinarLetra = () => {
    let letraAdivinar = txtAdivinar.value.toUpperCase().trim();
    if (letraAdivinar.length == 1 && ((letraAdivinar <= "Z" && letraAdivinar >= "A") || letraAdivinar == "Ñ" || letraAdivinar == "Ç")) {
        annadirLetra(letraAdivinar);
    }
    if (letraAdivinar.length > 1) {
        let dialogoRes = document.getElementById("resolver");
        dialogoRes.style.display="flex";
    }else
    txtAdivinar.value = "";

    let posicion = strPantalla.indexOf("_");
    if (resolverPalabra == true)
        posicion = -1;
    if (resolverPalabra == false)
        vidas = 0;

    if (vidas == 0) {
        dialogoResultado("PERDISTE!!!", "rgb(221, 73, 73)");
    }
    if (posicion == -1) {
        dialogoResultado("GANASTE!!!!", "rgb(73, 221, 93)");
    }
}
btnAdivinar.addEventListener("click", adivinarLetra);
~~~

***

## Evento al pulsar enter en la caja de texto

Cuando se pulsa enter en la caja de texto realiza la misma acción que al pulsar en el botón para adivinar.

~~~JavaScript
var pulsarEnter = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdivinar.click();
    }
}
txtAdivinar.onkeyup = pulsarEnter;
~~~

***

## Evento para resolver la palabra completa

Si la palabra es igual que la palabra introducida es igual o no a la palabra a adivinar se establecerá un boolean para después mostrar el resultado de la partida. También se oculta el dialogo de resolver la palabra entera.

~~~JavaScript
var pulsarResolver = () => {

    let palabraAdivinar = txtAdivinar.value.toUpperCase().trim();
    if (palabraAdivinar == strAdivinar) {
        resolverPalabra = true;
    } else {
        resolverPalabra = false;
    }
    adivinarLetra();

    let dialogoRes = document.getElementById("resolver");
    dialogoRes.style.display="none";
}
var btnResolver = document.getElementById("confirmar");
btnResolver.onclick=pulsarResolver
~~~

***

## Evento para cancelar la resolución por palabra completa

Si el usuario pulsa el botón cancelar para no resolver la palabra completa, el evento oculta el div para la resolución por palabra completa.

~~~JavaScript
var pulsarCancelar = () => {
    let dialogoRes = document.getElementById("resolver");
    dialogoRes.style.display="none";

    txtAdivinar.value = "";
}
var btnCancelar = document.getElementById("cancelar");
btnCancelar.onclick=pulsarCancelar;
~~~
