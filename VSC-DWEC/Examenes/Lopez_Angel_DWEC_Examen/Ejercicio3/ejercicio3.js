class EquiposAngel {
    constructor(nEq, nEs, nJ1, nJ2, nJ3) {
        this.nombreEquipo = nEq;
        this.nombreEstadio = nEs;
        this.nombresJugadores = [nJ1, nJ2, nJ3];
    }
    setNombreEquipo = (nombre) => {
        this.nombreEquipo=nombre;
    }
    setNombreEstadio = (nombre) => {
        this.nombreEstadio=nombre;
    }
    setNombreEquipo = (nombre) => {
        if (this.nombresJugadores.length < 3)
        this.nombresJugadores.push(nombre);
    }

    toString = () => {
        return `Nombre: ${this.nombreEquipo}<br>Estadio: ${this.nombreEstadio}<br>Jugadores: ${this.nombresJugadores[0]}, ${this.nombresJugadores[1]}, ${this.nombresJugadores[2]}<br>`;
    }
}


var equipos = [];
var btnAnnadir=document.getElementById("annadir");
var btnConsultaVarios=document.getElementById("consultar-todo");
var btnConsultaUno=document.getElementById("consultar-uno");

var annadirEquipo = () => {
    let nEq = window.prompt("Nombre del equipo");
    let nEs = prompt("Nombre del estadio");
    let nJ1 = prompt("Nombre del primer jugador");
    let nJ2 = prompt("Nombre del segundo jugador");
    let nJ3 = prompt("Nombre del tercer jugador");
    equipos.push(new EquiposAngel(nEq, nEs, nJ1, nJ2, nJ3));
}
btnAnnadir.onclick=annadirEquipo;


var consultarEquipos=()=>{
    let resultado=document.getElementById("resultado-consulta");
    
    resultado.innerHTML="";
    console.log(equipos.length)
    equipos.forEach(element => {
        resultado.innerHTML+=(element);
    });
}
btnConsultaVarios.onclick=consultarEquipos;


var consultarEquipo=()=>{
    let resultado=document.getElementById("resultado-consulta");
    resultado.innerHTML="";
    let consulta=prompt("Nombre del equipo").toUpperCase();
    
    equipos.forEach(element => {
        if(element.nombreEquipo.toUpperCase()===consulta)
        resultado.innerHTML+=(element);
    });
}
btnConsultaUno.onclick=consultarEquipo;