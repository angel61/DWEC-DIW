var boton1 = document.getElementById("boton1");



var sumaPares=0;
var sumaImpares=0;
var sumarParImpar = (num) => {
    if ((num % 2) === 0) {
        sumaPares+=num;
    } else {
        sumaImpares+=num;
    }
}

var funcionClick = () => {
    //Esta variable es utilizada para que se incremente su valor 
    //cada vez que se escriba un "-" en la tabla
    let cont = 1;
    let contenedor = document.getElementById("contenedor-tabla");
    let tabla = document.createElement("table");
    let tamannoTabla=5;

    let anteriorNumero = null;
    for (let i = 0; i < tamannoTabla; i++) {
        let fila = document.createElement("tr");
        for (let u = 0; u < tamannoTabla; u++) {
            let columna = document.createElement("td");

            if (cont != anteriorNumero) {
                columna.innerHTML = cont;
                sumarParImpar(cont);
                anteriorNumero = cont;
            }
            else {
                columna.innerHTML = "-";
                cont++;
            }

            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
    console.log(`Suma de numeros pares: ${sumaPares}\nSuma de numero impares: ${sumaImpares}`);

}

boton1.onclick = funcionClick

