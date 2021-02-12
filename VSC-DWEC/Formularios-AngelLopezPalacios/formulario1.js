
var enviar = document.getElementsByName("boton")[0];

let idioma = document.getElementsByName("idioma");
let conector = document.getElementsByName("conector")[0];
let nombre = document.getElementsByName("nombre")[0];
let apellidos = document.getElementsByName("apellidos")[0];
let sexo1 = document.getElementsByName("sexo1")[0];
let sexo2 = document.getElementsByName("sexo2");
let fecha = document.getElementsByName("fecha")[0];

let contenedor = document.getElementById("contenedor");
let errores = document.getElementById("contenedorErrores");

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //campos que se van a validar
    txtNombre = nombre.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/);
    txtApellidos = apellidos.value.match(/^[A-Za-z]+((\s[A-Za-z]+)+)?$/);
    txtSexo1 = sexo1.value;
    txtFecha = fecha.value;
    boolIdioma = false;
    boolSexo2 = false;

    //Validacion idioma
    for (let i = 0; i < idioma.length; i++)
        if (idioma[i].checked) {
            contenedor.innerHTML += (`Valor del idioma: ${idioma[i].value}<br>`);
            boolIdioma = true;
        }
    if (!boolIdioma)
        errores.innerHTML += "El valor del campo idioma no es valido<br>"

    //Validacion conector
    contenedor.innerHTML += `Valor del conector: ${conector.value}<br>`;

    //Validacion nombre
    if (txtNombre != null)
        contenedor.innerHTML += `Valor del nombre: ${txtNombre[0]}<br>`;
    else
        errores.innerHTML += "El valor del campo nombre no es valido<br>"

    //Validacion apellidos
    if (txtApellidos != null)
        contenedor.innerHTML += `Valor de los apellidos: ${txtApellidos[0]}<br>`;
    else
        errores.innerHTML += "El valor del campo apellidos no es valido<br>"

    //Validacion sexo1
    if (txtSexo1 != "")
        contenedor.innerHTML += `Valor del sexo1: ${sexo1.value}<br>`;
    else
        errores.innerHTML += "El valor del campo sexo1 no es valido<br>"

    //Validacion sexo2
    for (let i = 0; i < sexo2.length; i++) {
        if (sexo2[i].checked) {
            contenedor.innerHTML += (`Valor del sexo2 seleccionado: ${sexo2[i].value}<br>`);
            boolSexo2 = true;
        }
    }
    if (!boolSexo2)
        errores.innerHTML += "El valor del campo sexo2 no es valido<br>"

    //Validacion fecha
    if (txtFecha != "")
        contenedor.innerHTML += `Valor de la fecha: ${fecha.value}<br>`;
    else
        errores.innerHTML += "El valor del campo fecha no es valido<br>"

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;