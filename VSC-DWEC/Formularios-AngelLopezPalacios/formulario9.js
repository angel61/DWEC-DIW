
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



let nombre1 = document.getElementsByName("nombre")[0];
let apellidos1 = document.getElementsByName("apellidos")[0];
let fecha = document.getElementById("fecha");
let txtArea1 = document.getElementById("txtArea1");
let hardware = document.getElementsByName("hardware")[0];
let ide = document.getElementsByName("ide");
let asignatura1 = document.getElementsByName("asignatura1");
let fichero1 = document.getElementById("fichero1");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let ciclo = document.getElementsByName("ciclo")[0];
let fichero2 = document.getElementById("fichero2");
let txtArea2 = document.getElementById("txtArea2");
let dni = document.getElementsByName("dni")[0];
let nombre2 = document.getElementsByName("nombre")[1];
let apellidos2 = document.getElementsByName("apellidos")[1];
let telefono = document.getElementsByName("telefono")[0];
let asignatura2 = document.getElementsByName("asignatura2");
let hora = document.getElementById("hora");


var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtDNI = dni.value.match(/^[0-9]{8}[A-Z]$/gm);
    txtNombre1 = nombre1.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos1 = apellidos1.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtNombre2 = nombre2.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos2 = apellidos2.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtTelefono = telefono.value.match(/^[0-9]{3}((([- ]?[0-9]{3}){2})|(([- ]?[0-9]{2}){3}))$/gm);
   
    //Validaciones
    textoValidacion(txtNombre1, "nombre1");
    textoValidacion(txtApellidos1, "apellidos1");
    otraValidacion(fecha, "fecha");
    otraValidacion(txtArea1, "txtArea1");
    otraValidacion(hardware, "hardware");
    radioCheckValidacion(ide, "ide");
    radioCheckValidacion(asignatura1, "asignatura1");
    otraValidacion(fichero1, "fichero1");
    otraValidacion(color1, "color1");
    otraValidacion(color2, "color2");
    otraValidacion(ciclo, "ciclo");
    otraValidacion(fichero2, "fichero2");
    otraValidacion(txtArea2, "txtArea2");
    textoValidacion(txtDNI, "dni");
    textoValidacion(txtNombre2, "nombre2");
    textoValidacion(txtApellidos2, "apellidos2");
    textoValidacion(txtTelefono, "telefono");
    radioCheckValidacion(asignatura2, "asignatura2");
    otraValidacion(hora, "hora");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;