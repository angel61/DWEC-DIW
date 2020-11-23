export class Operacion {
    numero1 = undefined;
    numero2 = undefined;
    operacion = "";
    resultado = undefined;
    constructor() {
    }

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
        let simbolo=1;
        let factorial = 1;
        if(num<0){
            num*=-1;
            simbolo=-1;}
        for (var i = 2; i <= num; i++)
            factorial = factorial * i;
        return simbolo*factorial;
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
            this.fncReset();
            return this.resultado;
        }
    }
}