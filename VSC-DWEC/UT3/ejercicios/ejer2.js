var array =  [34,12,122,123,231,121];
var aux=0;
array.forEach(element => {
    if(element<100)
    aux+=element;
});
console.log(aux);