var miArray = ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

console.log(miArray.join(""));

var texto="";
for(var i of miArray){
    if(i!=" ")
    texto+=i;
}
console.log(texto);