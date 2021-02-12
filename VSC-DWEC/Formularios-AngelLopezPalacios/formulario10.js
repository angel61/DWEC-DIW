
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



let hora1 = document.getElementById("hora1");
let txtArea1 = document.getElementById("txtArea1");
let lenguaje = document.getElementsByName("lenguaje");
let fichero1 = document.getElementById("fichero1");
let fecha = document.getElementById("fecha");
let color1 = document.getElementById("color1");
let procesador1 = document.getElementsByName("procesador1");
let hora2 = document.getElementById("hora2");
let fichero2 = document.getElementById("fichero2");
let procesador2 = document.getElementsByName("procesador2");
let txtArea2 = document.getElementById("txtArea2");
let dni = document.getElementsByName("dni")[0];
let nombre = document.getElementsByName("nombre")[0];
let apellidos = document.getElementsByName("apellidos")[0];
let telefono = document.getElementsByName("telefono")[0];
let color2 = document.getElementById("color2");


var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtDNI = dni.value.match(/^[0-9]{8}[A-Z]$/gm);
    txtNombre = nombre.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos = apellidos.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtTelefono = telefono.value.match(/^[0-9]{3}((([- ]?[0-9]{3}){2})|(([- ]?[0-9]{2}){3}))$/gm);
   
    //Validaciones
    otraValidacion(hora1, "hora1");
    otraValidacion(txtArea1, "txtArea1");
    radioCheckValidacion(lenguaje, "lenguaje");
    otraValidacion(fichero1, "fichero1");
    otraValidacion(fecha, "fecha");
    otraValidacion(color1, "color1");
    radioCheckValidacion(procesador1, "procesador1");
    textoValidacion(hora2, "hora2");
    otraValidacion(fichero2, "fichero2");
    radioCheckValidacion(procesador2, "procesador2");
    otraValidacion(txtArea2, "txtArea2");
    textoValidacion(txtDNI, "dni");
    textoValidacion(txtNombre, "nombre");
    textoValidacion(txtApellidos, "apellidos");
    textoValidacion(txtTelefono, "telefono");
    otraValidacion(color2, "color2");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;