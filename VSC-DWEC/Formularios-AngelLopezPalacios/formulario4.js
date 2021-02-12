
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



let asignatura = document.getElementsByName("asignatura");
let editor = document.getElementsByName("editor");
let txtArea = document.getElementById("txtArea");
let procesador = document.getElementsByName("procesador")[0];

var clickFunc = () => {
    //inicio contenedores
    contenedor.innerHTML = "Valores:<br>";
    errores.innerHTML = "Errores:<br>";

    //Validaciones
    radioCheckValidacion(asignatura, "asignatura");
    radioCheckValidacion(editor, "editor");
    otraValidacion(txtArea, "txtArea");
    otraValidacion(procesador, "procesador");

    //fin contenedores
    contenedor.innerHTML += "<br>";
    errores.innerHTML += "<br>";
}

enviar.onclick = clickFunc;