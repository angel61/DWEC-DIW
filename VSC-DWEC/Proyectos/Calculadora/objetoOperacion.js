export class Operacion {
    numero1 = undefined;
    numero2 = undefined;
    operacion="";
    resultado=undefined;
    constructor() {
    }
    fncOperacion = (numero) => {
        if (this.numero1 == undefined) {
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
        this.numero1 = undefined;
        this.numero2 = undefined;
        this.operacion="";
    }
    fncResultado = (numero) => {
        if (this.numero1 != undefined) {
            this.fncOperacion(numero);
            this.fncReset();
            return this.resultado;
        }
    }

}