
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
let nombre1 = document.getElementsByName("nombre")[0];
let apellidos1 = document.getElementsByName("apellidos")[0];
let telefono = document.getElementsByName("telefono")[0];
let asignatura = document.getElementsByName("asignatura");
let fichero1 = document.getElementById("fichero1");
let txtArea = document.getElementById("txtArea");
let formato = document.getElementsByName("formato");
let nombre2 = document.getElementsByName("nombre")[1];
let apellidos2 = document.getElementsByName("apellidos")[1];
let direccion = document.getElementsByName("direccion")[0];
let fecha = document.getElementById("fecha");
let conector = document.getElementsByName("conector")[0];
let fichero2 = document.getElementById("fichero2");

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtNombre1 = nombre1.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos1 = apellidos1.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtTelefono = direccion.value.match(/^[0-9]{3}((([- ]?[0-9]{3}){2})|(([- ]?[0-9]{2}){3}))$/gm);
    txtNombre2 = nombre2.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos2 = apellidos2.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtDireccion = direccion.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);

    //Validaciones
    otraValidacion(color, "color");
    textoValidacion(txtNombre1, "nombre1");
    textoValidacion(txtApellidos1, "apellidos1");
    textoValidacion(txtTelefono, "telefono");
    radioCheckValidacion(asignatura, "asignatura");
    otraValidacion(fichero, "fichero1");
    otraValidacion(txtArea, "txtArea");
    radioCheckValidacion(formato, "formato");
    textoValidacion(txtNombre2, "nombre2");
    textoValidacion(txtApellidos2, "apellidos2");
    textoValidacion(txtDireccion, "direccion");
    otraValidacion(fecha, "fecha");
    otraValidacion(conector, "conector");
    otraValidacion(fichero, "fichero2");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;