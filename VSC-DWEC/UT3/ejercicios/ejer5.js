var n = 5;
var funcionNumeros = (numero) => {
  var array = new Array(numero);
  for(let i=0;i<numero;i++){
    array[i]=numero-i;
  }
  return array;
}

console.log(funcionNumeros(n));