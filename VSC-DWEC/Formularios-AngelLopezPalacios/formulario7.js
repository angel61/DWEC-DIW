
let enviar = document.getElementsByName("boton")[0];
let contenedor = document.getElementById("contenedor");
let errores = document.getElementById("contenedorErrores");

var radioCheckValidacion = (campo, nombreCampo) => {
    let validacion = false;
    for (let i = 0; i < campo.length; i++)
        if (campo[i].checked) {
            contenedor.innerHTML += (`Valor del campo ${nombreCampo}: ${campo[i].value}<br>`);
            validacion = true;
        }

    if (!validacion)
        errores.innerHTML += `El valor del campo ${nombreCampo} no es valido<br>`
};
var textoValidacion = (texto, nombreCampo) => {
    if (texto != null)
        contenedor.innerHTML += `Valor del campo ${nombreCampo}: ${texto[0]}<br>`;
    else
        errores.innerHTML += `El valor del campo ${nombreCampo} no es valido<br>`
};
var otraValidacion = (campo, nombreCampo) => {
    if (campo.value != "")
        contenedor.innerHTML += `Valor del ${nombreCampo}: ${campo.value}<br>`;
    else
        errores.innerHTML += `El valor del campo ${nombreCampo} no es valido<br>`
};



let color1 = document.getElementById("color1");
let instituto1 = document.getElementsByName("instituto")[0];
let estudios1 = document.getElementsByName("estudios")[0];
let navegador1 = document.getElementsByName("navegador1");
let fichero1 = document.getElementById("fichero1");
let hora1 = document.getElementById("hora1");
let hardware = document.getElementsByName("hardware");
let txtArea = document.getElementById("txtArea");
let navegador2 = document.getElementsByName("navegador2");
let fecha = document.getElementById("fecha");
let instituto2 = document.getElementsByName("instituto")[1];
let estudios2 = document.getElementsByName("estudios")[1];
let hora2 = document.getElementById("hora2");
let color2 = document.getElementById("color2");
let fichero2 = document.getElementById("fichero2");
let ciclo = document.getElementsByName("ciclo");

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtInstituto1 = instituto1.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtEstudios1 = estudios1.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtInstituto2 = instituto2.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtEstudios2 = estudios2.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
   
    //Validaciones
    otraValidacion(color1, "color1");
    textoValidacion(txtInstituto1, "instituto1");
    textoValidacion(txtEstudios1, "estudios1");
    radioCheckValidacion(navegador1, "navegador1");
    otraValidacion(fichero1, "fichero1");
    otraValidacion(hora1, "hora1");
    radioCheckValidacion(hardware, "hardware");
    otraValidacion(txtArea, "txtArea");
    radioCheckValidacion(navegador2, "navegador2");
    otraValidacion(fecha, "fecha");
    textoValidacion(txtInstituto2, "instituto2");
    textoValidacion(txtEstudios2, "estudios2");
    otraValidacion(hora2, "hora2");
    otraValidacion(color2, "color2");
    otraValidacion(fichero2, "fichero2");
    radioCheckValidacion(hardware, "ciclo");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;