var fechaInput = document.getElementById("fechaCalendario");
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Obtubre", "Noviembre", "Diciembre"];
let hoy = new Date();
var boton = document.getElementById("mostrarCalendario");

var calendarioTabla = document.getElementById("calendarioMes");

var mostrarFecha = document.getElementById("mostrarDia");

var mostrarDia = (evento) => {
    let elemento = evento.srcElement;

    let calendario = new Date(fechaInput.value);
    calendario.setDate(elemento.value);

    mostrarFecha.style.display = "block";
    mostrarFecha.textContent = "";
    mostrarFecha.innerHTML = `${calendario.getDate()} de ${meses[calendario.getMonth()]} de ${calendario.getFullYear()}`;
}
var rellenarCalendario = () => {
    let calendario = new Date(fechaInput.value);
    let diaActual = calendario.getDate();
    let mesActual = calendario.getMonth() + 1;
    let annoActual = calendario.getFullYear();


    let diasMes = (new Date(annoActual, mesActual, 0).getDate());
    calendario.setDate(1);
    let mesEmpieza = calendario.getDay() - 1;
    if (mesEmpieza == -1) {
        mesEmpieza = 6;
    }
    let diaDelMes = 1;

    calendarioTabla.textContent = "";

    for (let i = 0; i < 5; i++) {
        let fila = document.createElement("tr");

        let diaCol;
        for (let u = 0; u < 7; u++) {
            if (diasMes >= diaDelMes) {

                let columna = document.createElement("td");
                if (i == 0) {
                    if (u < mesEmpieza) {
                        diaCol = " "
                        columna.style.backgroundColor = "gainsboro";
                    }
                    else {
                        diaCol = diaDelMes
                        diaDelMes++;
                    }
                }
                else {
                    diaCol = diaDelMes;

                    diaDelMes++;
                }
                columna.innerHTML = diaCol;
                if (diaCol == hoy.getDate() && mesActual == (hoy.getMonth() + 1) && annoActual == (hoy.getFullYear())) {
                    columna.style.backgroundColor = "red";
                    columna.style.color = "white";
                }

                if (diaCol != " ") {
                    columna.value = diaCol;
                    columna.onclick = mostrarDia;
                    
                    if(u===6||u===5){
                        columna.style.color="red"; 
                     }
                }

                fila.appendChild(columna);
            }
        }
        calendarioTabla.appendChild(fila);
    }
}
fechaInput.onchange = rellenarCalendario;

fechaInput.value = hoy.toLocaleDateString('en-CA');
rellenarCalendario();
