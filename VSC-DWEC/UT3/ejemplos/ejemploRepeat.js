function fRepetir(texto, numero){
    var aux="";
    for(var i = 0;i<numero;i++){
        aux+=texto;
    }
    return aux;
}

console.log(fRepetir("DWEC",7));