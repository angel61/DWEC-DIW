
var foto = document.getElementById("foto");
var nombre = document.getElementById("nombre");
var oficio = document.getElementById("oficio");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var ubicacion = document.getElementById("ubicacion");
var formacion = document.getElementById("formacion");
var experiencia = document.getElementById("experiencia");
var programacionnom = document.getElementById("programacion-nombre");
var programacionniv = document.getElementById("programacion-nivel");
var sgbdnom = document.getElementById("sgbd-nombre");
var sgbdniv = document.getElementById("sgbd-nivel");
var aptitudes = document.getElementById("aptitudes");
var idiomanom = document.getElementById("idioma-nombre");
var idiomaniv = document.getElementById("idioma-nivel");

const nivelEstrellas = (elementos) => {
    let retorno = [];
    let elementosNombre = "";
    let elementosNivel = "";
    elementos.forEach(element => {
        elementosNivel += `<div class="pb-3">`;
        elementosNombre += `<div class="pb-3">`;
        elementosNombre += element.lenguaje;

        let nivel = element.nivel;
        for (let i = 0; i < nivel; i++)
            elementosNivel += `<span class="mx-2 fa fa-star text-primary"></span>`;

        let faltaNivel = 5 - nivel;
        for (let i = 0; i < faltaNivel; i++)
            elementosNivel += `<span class="mx-2 fa fa-star"></span>`;

        elementosNombre += `</div>`;
        elementosNivel += `</div>`;
    });
    retorno[0] = elementosNombre;
    retorno[1] = elementosNivel;
    return retorno;
}
const fncEtudios = (estudios) => {
    let estudiostxt = "";
    estudios.forEach(element => {
        estudiostxt += `<div name="estudio">
                            <div class="font-weight-bold"><u>${element.centro}</u></div>`;
        element.cursos.forEach(element2 => {
            estudiostxt += `<div name="curso"class="pb-3 text-justify"><span class="h4 font-weight-bold">${element2.año}</span> ${element2.curso}</div>`;
        });
        estudiostxt += "</div>";
    });
    return estudiostxt;
}
const fncExperiencia = (experiencia) => {
    let experienciatxt = "";
    experiencia.forEach(element => {
        experienciatxt += `<div name="curso" class="pb-3 text-justify"><div class="h4 font-weight-bold">${element.año} ${element.empresa}, ${element.ubicacion}</div> ${element.resumen}</div>`;
    });
    return experienciatxt;
}

const tratarDatos = (misdatos) => {
    foto.innerHTML += `<img class="w-25" src="img/${misdatos.informacion.foto}"/>`;
    nombre.innerHTML += `${misdatos.informacion.nombre + " " + misdatos.informacion.apellidos}`;
    oficio.innerHTML += `${misdatos.informacion.oficio}`;
    correo.innerHTML += `<a href="mailto:${misdatos.informacion.email}">${misdatos.informacion.email}</a>`;
    telefono.innerHTML += `${misdatos.informacion.telefono}`;
    ubicacion.innerHTML += `${misdatos.informacion.ubicacion.direccion}<br>${misdatos.informacion.ubicacion.cp} - ${misdatos.informacion.ubicacion.ciudad}`;

    formacion.innerHTML += fncEtudios(misdatos.estudios);

    experiencia.innerHTML += fncExperiencia(misdatos.experiencia);

    let programacion = nivelEstrellas(misdatos.programacion);
    programacionnom.innerHTML += programacion[0];
    programacionniv.innerHTML += programacion[1];

    let sgbd = nivelEstrellas(misdatos.sgbd);
    sgbdnom.innerHTML += sgbd[0];
    sgbdniv.innerHTML += sgbd[1];

    misdatos.aptitudes.forEach(element => {
        aptitudes.innerHTML+=`<li>${element}</li>`;
    });

    let idioma = nivelEstrellas(misdatos.idiomas);
    idiomanom.innerHTML += idioma[0];
    idiomaniv.innerHTML += idioma[1];

};




async function getJSON() {
    let response = await fetch('json/curriculum.json');
    let DatosJSON = await response.json();
    tratarDatos(DatosJSON);
}
getJSON();