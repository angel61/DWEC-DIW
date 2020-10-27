const frecorrerArray = (array) => {
array.forEach( element => {
    console.log(element);
});
}

var miArray1 = [1,2,3];
var miArray2 = [4,5,6];
var miArray3 = miArray1.concat(miArray2);
frecorrerArray(miArray3);
