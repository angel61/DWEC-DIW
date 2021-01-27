
var enviar = document.getElementsByName("boton")[0];

let idioma = document.getElementsByName("idioma");
let conector = document.getElementsByName("conector")[0];
let nombre = document.getElementsByName("nombre")[0];
let apellidos = document.getElementsByName("apellidos")[0];
let sexo1 = document.getElementsByName("sexo1")[0];
let sexo2 = document.getElementsByName("sexo2");
let fecha = document.getElementsByName("fecha")[0];

let contenedor = document.getElementById("contenedor");
var clickFunc = () => {
    contenedor.innerHTML="";
    for (let i = 0; i < idioma.length; i++)
        if (idioma[i].checked)
        contenedor.innerHTML += (`Valor del idioma: ${idioma[i].value}<br>`);

            contenedor.innerHTML += `Valor del conector: ${conector.value}<br>`;
            contenedor.innerHTML += `Valor del nombre: ${nombre.value}<br>`;
            contenedor.innerHTML += `Valor de los apellidos: ${apellidos.value}<br>`;
            contenedor.innerHTML += `Valor del sexo1: ${sexo1.value}<br>`;

    for (let i = 0; i < sexo2.length; i++)
        if (sexo2[i].checked)
        contenedor.innerHTML += (`Valor del sexo2 seleccionado: ${sexo2[i].value}<br>`);

        contenedor.innerHTML += `Valor de la fecha: ${fecha.value}<br>`;
}

enviar.onclick = clickFunc;