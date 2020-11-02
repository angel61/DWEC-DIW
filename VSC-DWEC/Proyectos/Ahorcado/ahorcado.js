//Array con las palabra a adivinar
var array = ["POLLO", "MORCILLA", "TABLET", "PAPELERA", "MESA", "LAMPARA", "KEBAB", "BOMBERO", "TRUENO", "TULIPAN", "PIRULETA"];

var txtPantalla = document.getElementById("txtPantalla");
var imgVidas = document.getElementById("imgVidas");

var intAdivinar = Math.floor(Math.random() * array.length);
var strAdivinar = array[intAdivinar];
console.log(strAdivinar);
var vidas = 6;

/*
Array que va a ser utilizado para enseñar la progresion del usuario en su partida
*/
var strPantalla = [];
for (let i = 0; i < strAdivinar.length; i++) {
    strPantalla[i] = "_";
}

/*
Array y funcion utilizados para llevar un registro de las letras que utilizo el usuario
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
Funcion utilizada para comprobar que la letra no fue usada, comprobar si esta se encuentra en la palabra 
y mostrar el resultado en la etiqueta de la palabra oculta
*/
var annadirLetra = (letra) => {
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
    } else {
        alert("La letra ya fue escrita anteriormente.");
    }

    txtPantalla.innerHTML = strPantalla.join(" ");
}

/*
Aqui se crean variable y funciones para ser lanzadas por los evento
Se encargan de validar el campo de texto y de enviar la letra a la funcion de añadir letra
*/
var txtAdivinar = document.getElementById("txtAdivinar");
var btnAdivinar = document.getElementById("btnAdivinar");
var adivinarLetra = () => {
    let letraAdivinar = txtAdivinar.value.toUpperCase();
    if (letraAdivinar.length == 1 && ((letraAdivinar <= "Z" && letraAdivinar >= "A") || letraAdivinar == "Ñ" || letraAdivinar == "Ç")) {
        annadirLetra(letraAdivinar);
    } else {
        alert("Letra no valida.");
    }
    txtAdivinar.value = "";

    let posicion = strPantalla.indexOf("_");
    let hunoResultado =document.getElementById("resultado");
    if (vidas == 0) {
        txtAdivinar.disabled = true;
        btnAdivinar.disabled = true;
        hunoResultado.innerHTML="PERDISTE!!!";
        hunoResultado.style.backgroundColor="rgb(221, 73, 73)";
        hunoResultado.setAttribute("open", "open")
    } else if (posicion == -1) {
        txtAdivinar.disabled = true;
        btnAdivinar.disabled = true;
        hunoResultado.innerHTML="GANASTE!!!!";
        hunoResultado.style.backgroundColor="rgb(73, 221, 93)";
        hunoResultado.setAttribute("open", "open")
    }
}
btnAdivinar.addEventListener("click", adivinarLetra);
var pulsarEnter = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdivinar.click();
    }
}
txtAdivinar.onkeyup = pulsarEnter;

//Muestra por primera vez la palabra oculta
txtPantalla.innerHTML = strPantalla.join(" ");