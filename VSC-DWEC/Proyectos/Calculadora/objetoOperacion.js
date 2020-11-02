export class Operacion {
    numero1 = -1;
    numero2 = -1;
    operacion="";
    resultado=-1;
    constructor() {
    }
    fncOperacion = (numero) => {
        if (numero1 == -1) {
            numero1 = numero;
        } else{
            numero2 = numero;
            switch (operacion) {
                case "+": resultado = numero1 + numero2; break;
                case "-": resultado = numero1 - numero2; break;
                case "/": resultado = numero1 / numero2; break;
                case "*": resultado = numero1 * numero2; break;
                case "%": resultado = numero1 % numero2; break;
                case "+-": resultado = -1 * (numero1); break;
            }
            return resultado;
        }
    }
    fncReset = () => {
        numero1 = -1;
        numero2 = -1;
        operacion="";
        resultado=-1;
    }
    fncResultado = (numero) => {
        if (numero1 != -1) {
            return fncOperacion(numero);
        }
    }

}