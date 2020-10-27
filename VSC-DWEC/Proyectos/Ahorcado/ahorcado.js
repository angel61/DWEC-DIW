var array = ["POLLO", "MORCILLA", "TABLET", "PAPELERA", "MESA", "LAMPARA", "KEBAB", "BOMBERO", "TRUENO", "TULIPAN", "PIRULETA"];

var txtPantalla = document.getElementById("txtPantalla");
var imgVidas = document.getElementById("imgVidas");

var intAdivinar = Math.floor(Math.random() * array.length);
var strAdivinar = array[intAdivinar];
console.log(strAdivinar);
var vidas = 6;
var strPantalla = [];
for (let i = 0; i < strAdivinar.length; i++) {
    strPantalla[i] = "_";
}

var historialLetras = [];
var letraUsada = (letra) => {
    if (historialLetras.find(element => element == letra)) {
        return false;
    } else {
        historialLetras.push(letra);
        return true;
    }
}

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
    if (vidas == 0) {
        txtAdivinar.disabled = true;
        btnAdivinar.disabled = true;
        alert("PERDISTE!!!");
    } else if (posicion == -1) {
        txtAdivinar.disabled = true;
        btnAdivinar.disabled = true;
        alert("GANASTE!!!!");
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

txtPantalla.innerHTML = strPantalla.join(" ");