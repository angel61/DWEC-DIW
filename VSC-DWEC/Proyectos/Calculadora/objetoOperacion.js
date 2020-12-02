export class Operacion {

    /*
     *Constructor de la clase que inicializa las variables del objeto.
     */
    constructor() {
        //Valores de la operacion.
        this.numero1 = undefined;
        this.numero2 = undefined;
        this.operacion = "";
        this.resultado = undefined;
        this.tipoOperacion = "";

        //Valores para la interaccion de la calculadora
        this.reset = false;
        this.consola = "0";
        this.visibleCent = "none";
        this.historial = "";
    }


    /*
    Funciones basicas que realizan las operaciones matematicas.
    */
    //Funcion que realiza la operacion
    fncOperacion = (numero) => {
        if (this.numero1 == undefined) {
            this.numero1 = numero;
        } else {
            this.numero2 = numero;
            switch (this.operacion) {
                case "+": this.resultado = this.numero1 + this.numero2; break;
                case "-": this.resultado = this.numero1 - this.numero2; break;
                case "/": this.resultado = this.numero1 / this.numero2; break;
                case "*": this.resultado = this.numero1 * this.numero2; break;
                case "%": this.resultado = this.numero1 % this.numero2; break;
                case "EXP": this.resultado = this.numero1 * Math.pow(10, this.numero2); break;
                case "^": this.resultado = Math.pow(this.numero1, this.numero2); break;
                case "+/-": this.resultado = -1 * (this.numero1); break;
                case "√": this.resultado = Math.sqrt(this.numero1); break;
                case "x!": this.resultado = this.fncFactorial(this.numero1); break;
                case "ln": this.resultado = Math.log(this.numero1); break;
                case "log": this.resultado = Math.log10(this.numero1); break;
                case "sin": this.resultado = Math.sin(this.numero1); break;
                case "cos": this.resultado = Math.cos(this.numero1); break;
                case "tan": this.resultado = Math.tan(this.numero1); break;
            }
            return this.resultado;
        }
    }

    //Funcion para realizar el factorial de un numero
    fncFactorial = (num) => {
        let simbolo = 1;
        let factorial = 1;
        if (num < 0) {
            num *= -1;
            simbolo = -1;
        }
        if (num < 171) {
            for (var i = 2; i <= num; i++)
                factorial = factorial * i;
        } else {
            factorial = Infinity;
        }
        return simbolo * factorial;
    }

    //Funcion que reinicia los valores de la operacion del objeto
    fncReset = () => {
        this.numero1 = undefined;
        this.numero2 = undefined;
        this.operacion = "";
    }

    //Funcion que termina la operacion
    fncResultado = (numero) => {
        if (this.numero1 != undefined) {
            this.fncOperacion(numero);
            this.resultado = this.fncResultadoNoEsNumerico(this.resultado);
            if (!isNaN(this.resultado))
                this.fncHistorial(this.tipoOperacion);
            this.fncReset();
            return this.resultado;
        }
    }

    //Funcion que Comprueba si el resultado el numerico o infinito
    fncResultadoNoEsNumerico = (valor) => {
        let aux = "Resultado no numérico."
        if (!isNaN(valor) && valor != "Infinity" && valor != "-Infinity") {
            aux = valor;
        }
        if (valor === Infinity || valor === -Infinity) {
            aux = "Resultado infinito.";
        }
        return aux;
    }




    /* 
    Funciones que hacen de intermediarios entre los eventos de la interfaz y las funciones de calculos. 
    En estas funciones se realizan todas las comprobaciones para que las operaciones salgan correctamente 
    y se devuelven cadenas de texto para mostrar por la consola de la calculadora.
    */

    //Funcion que prepara y realiza las operaciones que requieren de solo un numero para ser realizada
    fncOperacionMonoNumero = (valor) => {
        let fltConsola = parseFloat(this.consola);
        fltConsola = this.fncOperacionEncadenada(fltConsola);
        if (!isNaN(this.consola) && this.consola != "Infinity" && this.consola != "-Infinity") {
            this.numero1 = fltConsola;
            this.operacion = valor;
            this.tipoOperacion = "mono";
            this.consola = this.fncResultado(0);
            this.reset = true;
        }
        return this.consola;
    }

   //Funcion que prepara y realiza las operaciones que requieren de de dos numero para ser realizada
    fncOperacionMultiNumero = (valor) => {
        let fltConsola = parseFloat(this.consola);
        fltConsola = this.fncOperacionEncadenada(fltConsola);
        if (!isNaN(this.consola) && this.consola != "Infinity" && this.consola != "-Infinity") {
            this.operacion = valor;
            this.fncOperacion(fltConsola);
            this.reset = true;
        }

        return this.consola;
    }

    /*Funcion utilizada en las dos funciones anteriores 
     *y es utilizada para realizar una operacion depues de otra sin necesidad de pulsar igual
     */
    fncOperacionEncadenada = (consolaNumero) => {
        let aux = consolaNumero;
        if (!isNaN(this.consola) && this.consola != "Infinity" && this.consola != "-Infinity" && (this.numero1 != undefined && !this.reset)) {
            this.tipoOperacion = "multi";
            this.consola = this.fncResultado(aux);

            aux = this.resultado;
        }
        return aux;
    }

    //Funcion utilizada para terminar la operacion si es posible
    fncIgual() {
        if (!this.reset && this.operacion != "") {
            this.tipoOperacion = "multi";
            this.consola = this.fncResultado(parseFloat(this.consola));
            this.reset = true;
        }
        return this.consola;
    }

    //Funcion que reinicia la calculadora
    fncAC = () => {
        this.fncReset();
        this.resultado = undefined;
        this.consola = "0";
        return this.consola;
    }

    //Funcion que devuelve si la interfaz de la calculadora es visible o no
    fncCent = () => {
        switch (this.visibleCent) {
            case "flex":
                this.visibleCent = "none";
                break;
            case "none":
                this.visibleCent = "flex";
                break;
        }
        return this.visibleCent;
    }

    //Funcion con la cual se escriben en consola los numero o simbolos que se pueden mostrar por consola
    fncEscribirConsola = (valor) => {
        switch (true) {
            case (valor >= 0 && valor <= 9):
                this.fncReiniciarConsola("");
                if (this.consola.length < 10)
                    this.consola += valor;
                break;
            case (valor === "."):
                if (this.consola.length <= 8 && this.consola.length > 0 && this.consola.indexOf(".") == -1 && this.operacion != "EXP")
                    this.consola += valor;
                break;
            case (valor === "-"):
                this.fncReiniciarConsola(valor);
                break;
            case (valor === "pi"):
                this.fncReiniciarConsola(Math.PI);
                break;
        }
        return this.consola;
    }

    //Funcion utilizada para sustituir el valor de la consola por el parametro recibido
    fncReiniciarConsola = (valor) => {
        if (cajaTexto.value == "0" || this.reset) {
            this.consola = valor;
            this.reset = false;
        }
    }

    //Funcion para almacenar la(s) ultima(s) operaciones realizadas
    fncHistorial = (tipo) => {
        switch (tipo) {
            case "multi":
                this.historial = `<h2>${this.numero1} ${this.operacion} ${this.consola} =</h2><h1>${this.resultado}</h1><br>`;
                break;
            case "mono":
                this.historial += `<h2>${this.operacion} (${this.consola}) =</h2><h1>${this.resultado}</h1><br>`;
                break;
        }
    }

    //Funcion que devuelve el atributo historial y se vacia el string
    getHistorial = () => {
        let retorno = this.historial;
        this.historial = "";
        return retorno;
    }
}