var miArray = ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"];
var texto="";
for(var i of miArray){
    texto+=i;
}
console.log(texto);

var texto="";
for(var i of miArray){
    if(i!=" ")
    texto+=i;
}
console.log(texto);