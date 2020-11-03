class Operacion {
    numero1 = -1;
    numero2 = -1;
    operacion="";
    resultado=-1;
    constructor() {
    }
    fncOperacion = (numero) => {
        if (this.numero1 == -1) {
            this.numero1 = numero;
        } else{
            this.numero2 = numero;
            switch (this.operacion) {
                case "+": this.resultado = this.numero1 + this.numero2; break;
                case "-": this.resultado = this.numero1 - this.numero2; break;
                case "/": this.resultado = this.numero1 / this.numero2; break;
                case "*": this.resultado = this.numero1 * this.numero2; break;
                case "%": this.resultado = this.numero1 % this.numero2; break;
                case "+-": this.resultado = -1 * (this.numero1); break;
            }
            return this.resultado;
        }
    }
    fncReset = () => {
        this.numero1 = -1;
        this.numero2 = -1;
        this.operacion="";
    }
    fncResultado = (numero) => {
        if (this.numero1 != -1) {
            this.fncOperacion(numero);
            this.fncReset();
            return this.resultado;
        }
    }

}
var operacion=new Operacion();
var cajaTexto = document.getElementById("cajaTexto");
var reset = false;
cajaTexto.value = "0";

var escribir = (evento) => {
    let elemento = evento.srcElement;
    if (isNaN(cajaTexto.value)&&(cajaTexto!="-"&&isNaN(elemento.value)))
        cajaTexto.value = "0";
    if (elemento.value == "ac"){
        operacion.fncReset();
        operacion.resultado=-1;
        cajaTexto.value = "0";
    }else if (elemento.value >= 0 && elemento.value <= 9) {
        if (cajaTexto.value == "0" || reset) {
            cajaTexto.value = "";
            reset = false;
        }
        if (cajaTexto.value.length <= 10)
            cajaTexto.value += elemento.value;
    } else if (elemento.value == ".") {
        if (cajaTexto.value.length < 8 && cajaTexto.value.length > 0 && cajaTexto.value.indexOf(".") == -1)
            cajaTexto.value += elemento.value;
    } else if (elemento.value == "-" && (cajaTexto.value == "0" || reset)){
        cajaTexto.value = "-";
        reset = false;
    }else {
        let cajaNumero = parseFloat(cajaTexto.value);
        if ((cajaNumero > 0 || cajaNumero < 0)) {
            if (elemento.value == "+-"){
                operacion.numero1=cajaNumero;
                operacion.operacion = elemento.value;
                cajaTexto.value = operacion.fncResultado(0);
                operacion.fncReset();
            }else if (elemento.value != "=" && elemento.value != "+-") {
                if(operacion.numero1==-1){
                    operacion.operacion = elemento.value;
                    operacion.fncOperacion(cajaNumero);
                }else{
                    cajaTexto.value = operacion.fncResultado(cajaNumero);
                    operacion.fncReset();
                    operacion.operacion = elemento.value;
                    operacion.numero1=parseFloat(cajaTexto.value);
                }
                reset=true;
            } else if(operacion.numero1!=-1&&!reset)
                cajaTexto.value = operacion.fncResultado(cajaNumero);
        }
    }
}
var inicializarEventos = () => {
    let botonAux;
    let arrayBotones = document.getElementsByName("btn");
    for (let i = 0; i < arrayBotones.length; i++) {
        botonAux = arrayBotones[i];
        botonAux.addEventListener("click", escribir);
    }
}
inicializarEventos();