
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



let color = document.getElementById("color");
let txtArea = document.getElementById("txtArea");
let lenguaje = document.getElementsByName("lenguaje")[0];
let ciclo1 = document.getElementsByName("ciclo1");
let fecha = document.getElementById("fecha");
let fichero = document.getElementById("fichero");
let ciclo2 = document.getElementsByName("ciclo2")[0];

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //Validaciones
    otraValidacion(color, "color");
    otraValidacion(txtArea, "txtArea");
    otraValidacion(lenguaje, "lenguaje");
    radioCheckValidacion(ciclo1, "ciclo1");
    otraValidacion(fecha, "fecha");
    otraValidacion(fichero, "fichero");
    otraValidacion(ciclo2, "ciclo2");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;