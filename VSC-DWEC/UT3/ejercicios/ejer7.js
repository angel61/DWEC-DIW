var array = ["A", "B", "C", "A"]
var resultado = [];
var nuevoArray=[];
array.forEach(element => {
    if (resultado[element] == null)
        resultado[element] = 1;
    else
        ++resultado[element];
});
array.forEach(element => {
    if(resultado[element]!=1)
        nuevoArray.push(element);
});
array=nuevoArray;
console.log(array);