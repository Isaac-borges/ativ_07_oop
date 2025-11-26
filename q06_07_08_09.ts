class Pessoa {
    private _nome: string;
    private _sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(): string {
        return this._nome;
    }

    get sobrenome(): string {
        return this._sobrenome;
    }

    get nomeCompleto(): string {
        return this._nome + " " + this._sobrenome;
    }
}

class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario >= 0 ? salario : 0;
    }

    get salario(): number {
        return this._salario;
    }

    get matricula(): string {
        return this._matricula;
    }

    calcularSalarioPrimeiraParcela(): number {
        if (this.salario > 0) return this.salario * 0.6;
        else return 0;
    }

    calcularSalarioSegundaParcela(): number {
        if (this.salario > 0) return this.salario * 0.4;
        else return 0;
    }
}

class Professor extends Funcionario {
    private _titulacao: string;
    constructor(
        nome: string,
        sobrenome: string,
        matricula: string,
        salario: number,
        titulacao: string,
    ) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        if (this.salario > 0) return this.salario;
        else return 0;
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }

    get titulacao(): string {
        return this._titulacao;
    }
}

class FolhaDePagamento {
    private _pessoas: Pessoa[];

    constructor(pessoas: Pessoa[]) {
        this._pessoas = pessoas;
    }

    calcularPagamentos(): number {
        let total: number = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                total = total + pessoa.calcularSalarioPrimeiraParcela();
                total = total + pessoa.calcularSalarioSegundaParcela();
            }
        }

        return total;
    }
}

let pessoa: Pessoa = new Pessoa("Fulano", "Cicrano");
let professor: Professor = new Professor("Deltrano", "Lutero", "123", 3000, "Por");

console.log(pessoa instanceof Funcionario);
console.log(professor instanceof Funcionario);

let p1 = new Pessoa("Carlos", "Medeiros");
let p2 = new Pessoa("Ana", "Ferreira");
let f1 = new Funcionario("Marcos", "Oliveira", "F001", 2500);
let f2 = new Funcionario("Juliana", "Santos", "F002", 3200);
let f3 = new Funcionario("Renato", "Pereira", "F003", 1800);
let f4 = new Funcionario("Bianca", "Costa", "F004", 4000);
let prof1 = new Professor("Lucia", "Cardoso", "P001", 5000, "Mestre");
let prof2 = new Professor("Guilherme", "Barros", "P002", 4200, "Doutor");
let prof3 = new Professor("Fernanda", "Souza", "P003", 3800, "Especialista");
let prof4 = new Professor("Rafael", "Nascimento", "P004", 6000, "Doutor");

let folha: FolhaDePagamento = new FolhaDePagamento([p1, p2, f1, f2, f3, f4, prof1, prof2, prof3, prof4]);

console.log(folha.calcularPagamentos())
