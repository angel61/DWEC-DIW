//Array con las palabras a adivinar
var array = ["POLLO", "MORCILLA", "TABLET", "PAPELERA", "MESA", "GAFAS", "KEBAB", "BOMBERO", "TRUENO", "ROSA", "PIRULETA"];

var txtPantalla = document.getElementById("txtPantalla");
var imgVidas = document.getElementById("imgVidas");

var intAdivinar = Math.floor(Math.random() * array.length);
var strAdivinar = array[intAdivinar];
console.log(strAdivinar);
var vidas = 6;
var resolverPalabra;

/*
Array que va a ser utilizado para enseñar la progresión del usuario en su partida
*/
var strPantalla = [];
for (let i = 0; i < strAdivinar.length; i++) {
    strPantalla[i] = "_";
}

/*
Array y función utilizada para llevar un registro de las letras que utilizo el usuario
*/
var historialLetras = [];
var letraUsada = (letra) => {
    if (historialLetras.find(element => element == letra)) {
        return false;
    } else {
        historialLetras.push(letra);
        return true;
    }
}

/*
Función utilizada para comprobar que la letra no fue usada, comprobar si esta se encuentra en la palabra 
y mostrar el resultado en la etiqueta de la palabra oculta
*/
var annadirLetra = (letra) => {
    let letraUsadaH1 = document.getElementsByClassName("letra-usada")[0];
    if (letraUsada(letra)) {
        let posicion = strAdivinar.indexOf(letra);
        if (posicion != -1)
            strPantalla[posicion] = letra;
        else
            vidas--;
        imgVidas.src = `img/ahorcado_${vidas}.png`;
        while (posicion != -1) {
            posicion = strAdivinar.indexOf(letra, posicion + 1);
            strPantalla[posicion] = letra;
        }
        letraUsadaH1.style.display = "none";
    } else {
        letraUsadaH1.style.display = "inline";
    }

    txtPantalla.innerHTML = strPantalla.join(" ");
}


var txtAdivinar = document.getElementById("txtAdivinar");
var btnAdivinar = document.getElementById("btnAdivinar");
/*
Esta función es utilizada para terminar el juego 
y mostrar el resultado de la partida en un div vacío
*/
var dialogoResultado = ($titulo, $color) => {
    let hunoResultado = document.getElementById("resultado");
    txtAdivinar.disabled = true;
    btnAdivinar.disabled = true;
    hunoResultado.innerHTML = $titulo;
    hunoResultado.style.backgroundColor = $color;
}

/*
Aquí se encuentra la función para el evento del botón de adivinar
Se encarga de validar el campo de texto y de enviar la letra a la función de añadir letra
*/
var adivinarLetra = () => {
    let letraAdivinar = txtAdivinar.value.toUpperCase().trim();
    if (letraAdivinar.length == 1 && ((letraAdivinar <= "Z" && letraAdivinar >= "A") || letraAdivinar == "Ñ" || letraAdivinar == "Ç")) {
        annadirLetra(letraAdivinar);
    }
    if (letraAdivinar.length > 1) {
        let dialogoRes = document.getElementById("resolver");
        dialogoRes.style.display = "flex";
    } else
        txtAdivinar.value = "";

    let posicion = strPantalla.indexOf("_");
    if (resolverPalabra == true)
        posicion = -1;
    if (resolverPalabra == false)
        vidas = 0;

    if (vidas == 0) {
        dialogoResultado("PERDISTE!!!", "rgb(221,73,73)");
    }
    if (posicion == -1) {
        dialogoResultado("GANASTE!!!!", "rgb(73,221,93)");
    }
}
btnAdivinar.addEventListener("click", adivinarLetra);


/*
Aquí se encuentra la función para lanzar el evento anterior pulsando enter en la caja de texto
Se encarga de validar el campo de texto y de enviar la letra a la función de añadir letra
*/
var pulsarEnter = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdivinar.click();
    }
}
txtAdivinar.onkeyup = pulsarEnter;

/*
Esta función es utilizada como evento para resolver la palabra entera.
*/
var pulsarResolver = () => {

    let palabraAdivinar = txtAdivinar.value.toUpperCase().trim();
    if (palabraAdivinar == strAdivinar) {
        resolverPalabra = true;
    } else {
        resolverPalabra = false;
    }
    adivinarLetra();

    let dialogoRes = document.getElementById("resolver");
    dialogoRes.style.display = "none";
}
var btnResolver = document.getElementById("confirmar");
btnResolver.onclick = pulsarResolver


/*
Esta función es utilizada como evento para ocultar el div para resolver la palabra entera.
*/
var pulsarCancelar = () => {
    let dialogoRes = document.getElementById("resolver");
    dialogoRes.style.display = "none";

    txtAdivinar.value = "";
}
var btnCancelar = document.getElementById("cancelar");
btnCancelar.onclick = pulsarCancelar;

//Muestra por primera vez la palabra oculta
txtPantalla.innerHTML = strPantalla.join(" ");