class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    get operando1(): number {
        return this._operando1;
    }

    get operando2(): number {
        return this._operando2;
    }

    soma(): number {
        return this._operando1 + this._operando2;
    }
}

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return this.operando1 ** this.operando2;
    }
}

let calculadora: Calculadora = new Calculadora(3, 3);
let calculadora_cientifica = new CalculadoraCientifica(3, 3);

console.log(calculadora.soma());
console.log(calculadora_cientifica.exponenciar());
