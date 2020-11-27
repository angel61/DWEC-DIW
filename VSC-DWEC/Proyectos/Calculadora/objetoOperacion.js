export class Operacion {
    //Variables de las operaciones de la calculadora.
    numero1;
    numero2;
    operacion;
    resultado;
    tipoOperacion;

    //Variables de la interaccion de la calculadora.
    reset;
    consola;
    visibleCent;
    historial;

    /*
    Constructor de la clase que inicializa las variables del objeto.
     */
    constructor() {
        this.numero1 = undefined;
        this.numero2 = undefined;
        this.operacion = "";
        this.resultado = undefined;
        this.tipoOperacion="";

        this.reset = false;
        this.consola = "0";

        this.visibleCent = false;

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
        for (var i = 2; i <= num; i++)
            factorial = factorial * i;
        return simbolo * factorial;
    }

    //Funcion que reinicia los valores del objeto
    fncReset = () => {
        this.numero1 = undefined;
        this.numero2 = undefined;
        this.operacion = "";
    }

    //Funcion que termina la operacion
    fncResultado = (numero) => {
        if (this.numero1 != undefined) {
            this.fncOperacion(numero);
            this.fncHistorial(this.tipoOperacion);
            this.fncReset();
            return this.resultado;
        }
    }



/* 
Funciones que hacen de intermediarios entre los eventos de la interfaz y las funciones de calculos. 
En estas funciones se realizan todas las comprobaciones para que las operaciones salgan correctamente 
y se devuelven cadenas de texto para mostrar por la consola de la calculadora.
*/
    fncOperacionMonoNumero = (valor) => {
        if (!isNaN(this.consola) && this.consola != "Infinity"&& this.consola != "-Infinity") {
            this.numero1 = parseFloat(this.consola);
            this.operacion = valor;
            this.tipoOperacion="mono";
            this.consola = this.fncResultado(0);
            this.reset = true;
        }
        return this.consola;
    }


    //cuando pulse el boton de un operador se resetea el numero si o si
    //si se dio al igual se resetear el numero o realizar una operacion con el
    fncOperacionMultiNumero = (valor) => {
        let consolaNumero = parseFloat(this.consola);

        if (!isNaN(this.consola) && this.consola != "Infinity"&& this.consola != "-Infinity") {
            if (this.numero1 != undefined && !this.reset) {
                this.tipoOperacion="multi";
                this.consola = this.fncResultado(consolaNumero);

                consolaNumero = this.resultado;
            }
            this.operacion = valor;
            this.fncOperacion(consolaNumero);
            this.reset = true;
        }

        return this.consola;
    }

    //Funcion que realiza la funciones de la calculadora
    fncAC = () => {
        this.fncReset();
        this.resultado = undefined;
        this.consola = "0";
        return this.consola;
    }

    //Funcion que devuelve de la calculadora
    fncCent = () => {
        if (this.visibleCent) {
            this.visibleCent = false;
        }
        else {
            this.visibleCent = true;
        }
        return this.visibleCent;
    }

    fncIgual() {
        if (!this.reset && this.operacion != "") {
            this.tipoOperacion="multi";
            this.consola = this.fncResultado(parseFloat(this.consola));
            this.reset = true;
        }
        return this.consola;
    }

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

    fncReiniciarConsola = (valor) => {
        if (cajaTexto.value == "0" || this.reset) {
            this.consola = valor;
            this.reset = false;
        }
    }

    fncHistorial = (tipo) => {
        switch(tipo){
            case "multi":
        this.historial = `<h2>${this.numero1} ${this.operacion} ${this.consola} =</h2><h1>${this.resultado}</h1><br>`;
            break;
            case "mono":
        this.historial = `<h2>${this.operacion} (${this.consola}) =</h2><h1>${this.resultado}</h1><br>`;
            break;
    }
    }

    getHistorial = () => {
        let retorno = this.historial;
        this.historial = "";
        return retorno;
    }
}