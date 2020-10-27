var objeto =  {nombre:"Juan", edad:84, profesion:"Ministro"};


console.log("Bucle for in");
var indice=0;
for(indice in objeto){
    console.log(objeto[indice]);
}


var valoresObj=Object.values(objeto);

console.log("\nBucle for normal");
indice=0;
for(indice;indice<objeto.length;indice++){
    console.log(valoresObj[indice]);
}

console.log("\nBucle while");
indice=0;
while(indice<valoresObj.length){
    console.log(valoresObj[indice]);
    indice++;
}

console.log("\nBucle do while");
indice=0;
do{
    console.log(valoresObj[indice]);
    ++indice;
}while(indice<valoresObj.length);
