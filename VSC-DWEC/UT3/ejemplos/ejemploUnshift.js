const frecorrerArray = (array) => {
array.forEach( element => {
    console.log(element);
});
}

var miArray = [1,2,3];
frecorrerArray(miArray);
console.log("");
var auxArray = miArray.unshift("hola");

frecorrerArray(miArray);
console.log("");
console.log(auxArray);