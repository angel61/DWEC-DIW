const frecorrerArray = (array) => {
array.forEach( element => {
    console.log(element);
});
}

var miArray = [1,2,3,4,5,6];
var auxArray = miArray.slice(1,4);

frecorrerArray(auxArray);
var auxArray = miArray.slice(-1);

frecorrerArray(auxArray);