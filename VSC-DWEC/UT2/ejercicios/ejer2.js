var auxArray = ["Real Madrid-89", "Betis-780", "Atlético de Madrid-79", "Barcelona-401"];
var array = [];
var i;

for (i of auxArray) {
    let aux = i.split("-");
    let puntos = parseInt(aux[1]);
    let nombre = aux[0];

    if (array.length == 0) {
        array[0] = { "nombre": nombre, "puntos": puntos };
    } else {
        let u;
        for (u = array.length - 1; u >= 0; u--) {
            let objetoArray = array[u];
            let auxObj1 = { "nombre": objetoArray['nombre'], "puntos": objetoArray['puntos'] };
            let auxObj2 = { "nombre": nombre, "puntos": puntos };

            if (puntos > objetoArray['puntos']) {
                [array[(u + 1)], array[u]] = [auxObj1, auxObj2];
            } else if ((array.length - 1) == u) {
                array[(u + 1)] = auxObj2;
            }
        }
    }
}

console.log(array);