
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



let fecha1 = document.getElementById("fecha1");
let fichero1 = document.getElementById("fichero1");
let procesador = document.getElementsByName("procesador");
let asignatura = document.getElementsByName("asignatura");
let nombre = document.getElementsByName("nombre")[0];
let apellidos = document.getElementsByName("apellidos")[0];
let direccion = document.getElementsByName("direccion")[0];
let color = document.getElementById("color");
let txtArea = document.getElementById("txtArea");
let idioma = document.getElementsByName("idioma")[0];
let hora = document.getElementById("hora");
let fecha2 = document.getElementById("fecha2");
let fichero2 = document.getElementById("fichero2");
let sexo = document.getElementsByName("sexo");

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtNombre = nombre.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtApellidos = apellidos.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);
    txtDireccion = direccion.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/gm);

    //Validaciones
    otraValidacion(fecha1, "fecha1");
    otraValidacion(fichero1, "fichero1");
    radioCheckValidacion(procesador, "procesador");
    radioCheckValidacion(asignatura, "asignatura");
    textoValidacion(txtNombre, "nombre");
    textoValidacion(txtApellidos, "apellidos");
    textoValidacion(txtDireccion, "direccion");
    otraValidacion(color, "color");
    otraValidacion(txtArea, "txtArea");
    otraValidacion(idioma, "idioma");
    otraValidacion(hora, "hora");
    otraValidacion(fecha2, "fecha2");
    otraValidacion(fichero2, "fichero2");
    radioCheckValidacion(sexo, "sexo");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;