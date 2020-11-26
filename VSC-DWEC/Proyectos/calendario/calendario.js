var fechaInput=document.getElementById("fechaCalendario");
let hoy = new Date();
fechaInput.value=`${hoy.getFullYear()}-${hoy.getMonth()+1}-${hoy.getDate()}`;
var boton=document.getElementById("mostrarCalendario");

var calendarioTabla = document.getElementById("calendarioMes");

var mostrarFecha=document.getElementById("mostrarDia");

var mostrarDia=(evento)=>{
    let elemento=evento.srcElement;

    let calendario=new Date(fechaInput.value);
    calendario.setDate(elemento.value);

    mostrarFecha.textContent="";
    mostrarFecha.innerHTML=`${calendario.getDate()}-${calendario.getMonth()+1}-${calendario.getFullYear()}`;
}
var rellenarCalendario = () => {
    let calendario=new Date(fechaInput.value);
    let diaActual = calendario.getDate();
    let mesActual = calendario.getMonth()+1;
    let annoActual = calendario.getFullYear();


    let diasMes = (new Date(annoActual, mesActual, 0).getDate());
    calendario.setDate(1);
    let mesEmpieza = calendario.getDay() - 1;
    if (mesEmpieza == -1) {
        mesEmpieza = 6;
    }
    let diaDelMes = 1;

    calendarioTabla.textContent="";

    for (let i = 0; i < 6; i++) {
        let fila = document.createElement("tr");

        let diaCol;
        for (let u = 0; u < 7; u++) {
            if (diasMes >= diaDelMes) {
                if (i == 0) {
                    if (u < mesEmpieza)
                        diaCol = " "
                    else {
                        diaCol = diaDelMes
                        diaDelMes++;
                    }
                }
                else {
                    diaCol = diaDelMes;

                    diaDelMes++;
                }
                let columna = document.createElement("td");
                columna.innerHTML = diaCol;
                if (diaCol == diaActual) {
                    columna.style.backgroundColor = "red";
                    columna.style.color = "white";
                }

                if(diaCol!=" "){
                    columna.value=diaCol;
                    columna.onclick=mostrarDia;
                }

                fila.appendChild(columna);
            }
        }
        calendarioTabla.appendChild(fila);
    }
}
fechaInput.onchange=rellenarCalendario;

rellenarCalendario();