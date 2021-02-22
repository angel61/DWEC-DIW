//Cabecera
var foto = document.getElementById("foto");
var nombre = document.getElementById("nombre");
var oficio = document.getElementById("oficio");
var correo = document.getElementById("correo");
var github = document.getElementById("github");
var telefono = document.getElementById("telefono");
var ubicacion = document.getElementById("ubicacion");

//Columna izquierda
var formacion = document.getElementById("formacion");

var experiencia = document.getElementById("experiencia");

var aptitudes = document.getElementById("aptitudes");

var conocimientos = document.getElementById("conocimientos");

//Columna derecha
var programacionnom = document.getElementById("programacion-nombre");
var programacionniv = document.getElementById("programacion-nivel");

var sgbdnom = document.getElementById("sgbd-nombre");
var sgbdniv = document.getElementById("sgbd-nivel");

var lmarcanom = document.getElementById("lmarcas-nombre");
var lmarcaniv = document.getElementById("lmarcas-nivel");

var idiomanom = document.getElementById("idioma-nombre");
var idiomaniv = document.getElementById("idioma-nivel");

//Funcion para cargar los elementos con estrellas
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

//Funcion para cargar los estudios
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

//Funcion para cargar la experiencia laboral
const fncExperiencia = (experiencia) => {
    let experienciatxt = "";
    experiencia.forEach(element => {
        experienciatxt += `<div name="curso" class="pb-3 text-justify"><div class="h4 font-weight-bold">${element.año} ${element.empresa}, ${element.ubicacion}</div> ${element.resumen}</div>`;
    });
    return experienciatxt;
}

const tratarDatos = (misdatos) => {
    //Cabecera
    let imagen = document.createElement("IMG");
    imagen.src = `img/${misdatos.informacion.foto}`;
    imagen.className = "w-25";
    foto.appendChild(imagen);
    nombre.innerHTML += `${misdatos.informacion.nombre + " " + misdatos.informacion.apellidos}`;
    oficio.innerHTML += `${misdatos.informacion.oficio}`;
    correo.innerHTML += `<a href="mailto:${misdatos.informacion.email}">${misdatos.informacion.email}</a>`;
    github.innerHTML += `<a href="${misdatos.informacion.github.link}">${misdatos.informacion.github.nombre}</a>`;
    telefono.innerHTML += `${misdatos.informacion.telefono}`;
    ubicacion.innerHTML += `${misdatos.informacion.ubicacion.direccion}<br>${misdatos.informacion.ubicacion.cp} - ${misdatos.informacion.ubicacion.ciudad}`;

    //Columna izquierda
    formacion.innerHTML += fncEtudios(misdatos.estudios);

    experiencia.innerHTML += fncExperiencia(misdatos.experiencia);

    let aptitudesSet = new Set(misdatos.aptitudes);
    aptitudesSet.forEach(element => {
        aptitudes.innerHTML += `<li>${element}</li>`;
    });

    let conocimientosSet = new Set(misdatos.otroscon);
    conocimientosSet.forEach(element => {
        conocimientos.innerHTML += `<li>${element}</li>`;
    });

    //Columna derecha
    let programacion = nivelEstrellas(misdatos.programacion);
    programacionnom.innerHTML += programacion[0];
    programacionniv.innerHTML += programacion[1];

    let sgbd = nivelEstrellas(misdatos.sgbd);
    sgbdnom.innerHTML += sgbd[0];
    sgbdniv.innerHTML += sgbd[1];

    let lmarcas = nivelEstrellas(misdatos.lmarcas);
    lmarcanom.innerHTML += lmarcas[0];
    lmarcaniv.innerHTML += lmarcas[1];

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