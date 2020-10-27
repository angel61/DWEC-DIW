const frecorrerArray = (array) => {
array.forEach( element => {
    console.log(element);
});
}

var miArray = [1,2,3,4,5,6,7,8,9];
var auxArray = miArray.splice(0,2);

frecorrerArray(miArray);
console.log("\n\n");
frecorrerArray(auxArray);