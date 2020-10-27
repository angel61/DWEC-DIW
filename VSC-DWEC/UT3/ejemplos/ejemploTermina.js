var cadena = "Me da pereza copiar el texto.";
var punto = "o.";
if(cadena.substring(cadena.length-punto.length)===punto){
    console.log("Hay punto");
}else{
    console.log("No hay punto");
}

var cadena = "Me da pereza copiar el texto.";
if(cadena.endsWith(".")){
    console.log("Hay punto");
}else{
    console.log("No hay punto");
}