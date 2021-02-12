
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



let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");
let fichero = document.getElementById("fichero");
let lenguaje = document.getElementsByName("lenguaje")[0];
let color = document.getElementById("color");
let hardware = document.getElementsByName("hardware");
let txtArea = document.getElementById("txtArea");
let instituto = document.getElementsByName("instituto")[0];
let estudios = document.getElementsByName("estudios")[0];
let nombre = document.getElementsByName("nombre")[0];
let apellidos = document.getElementsByName("apellidos")[0];
let email = document.getElementsByName("email")[0];
let conector = document.getElementsByName("conector");

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtInstituto = instituto.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtEstudios = estudios.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtNombre = nombre.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos = apellidos.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtEmail = email.value.match(/[A-Za-z0-9-_]+\@[A-Za-z-_]+\.[A-Za-z]{3}$/gm);

    //Validaciones
    otraValidacion(fecha, "fecha");
    otraValidacion(hora, "hora");
    otraValidacion(fichero, "fichero");
    otraValidacion(lenguaje, "lenguaje");
    otraValidacion(color, "color");
    radioCheckValidacion(hardware, "hardware");
    otraValidacion(txtArea, "txtArea");
    textoValidacion(txtInstituto, "instituto");
    textoValidacion(txtEstudios, "estudios");
    textoValidacion(txtNombre, "nombre");
    textoValidacion(txtApellidos, "apellidos");
    textoValidacion(txtEmail, "email");
    radioCheckValidacion(conector, "conector");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;