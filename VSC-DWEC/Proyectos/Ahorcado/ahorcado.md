# Trabajo ahorcado - Ángel López Palacios
El proyecto es un juego del ahorcado en el cual se encuentra una imagen con el tipico dibujo del ahorcado, una caja de texto, un boton para comprobar el valor de la caja de texto, un div para visualizar el resultado y otro div para verificar si el usuario quiere resolver definitivamente la palabra enterra.


## Funcion y array para llevar el registro de letras
Si la letra que recibe existe devuelve un boolean como false y si no existe lo guarda en el array y devuelve true.
~~~
var historialLetras = [];

var letraUsada = (letra) => {
    if (historialLetras.find(element => element == letra)) {
        return false;
    } else {
        historialLetras.push(letra);
        return true;
    }
}
~~~