var texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aut dicta aliquid unde ab reiciendis esse reprehenderit fuga aliquam delectus perspiciatis et ullam consectetur deleniti accusantium ducimus deserunt nesciunt molestias.";
var arrayTexto=texto.split(" ");
console.log(arrayTexto.length+"\n");
console.log(arrayTexto[0]+"\n");
console.log(arrayTexto[arrayTexto.length-1]+"\n");
console.log(arrayTexto.reverse().toString()+"\n");

var ordenar= function(a,b){
  return a.localeCompare(b);
}

console.log(arrayTexto.sort(ordenar).toString()+"\n");
console.log(arrayTexto.sort(ordenar).reverse().toString()+"\n");