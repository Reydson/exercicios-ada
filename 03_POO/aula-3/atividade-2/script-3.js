class Funcionario {
    #nome;
    #cargo;
    #salario;
    constructor(nome, cargo, salario) {
        this.#nome = nome;
        this.#cargo = cargo;
        this.#salario = salario;
    }

    getSalarioBruto() {
        return this.#salario;
    }

    getSalarioLiquido() {
        return this.#salario;
    }
}

class Analista extends Funcionario{
    static adicional = 10;
    getSalarioLiquido() {
        return (this.getSalarioBruto() * (this.constructor.adicional + 100)) / 100;
    }
}

class Desenvolvedor extends Funcionario{
    #linguagem;
    constructor(nome, cargo, salario, linguagem) {
        super(nome, cargo, salario);
        this.#linguagem = linguagem;
    }
}

class Gerente {
    #nome;
    constructor(nome) {
        this.#nome = nome;
    }
}

class Departamento {
    #gerente;
    #funcionarios = [];
    constructor(gerente, funcionarios) {
        this.#gerente = gerente;
        if(funcionarios) {
            this.#funcionarios = funcionarios;
        }
    }

    adicionarFuncionario(funcionario) {
        this.#funcionarios.push(funcionario);
    }

    calculaTotalSalarios() {
        return this.#funcionarios.reduce((acumulador, funcionario) => acumulador + funcionario.getSalarioLiquido(), 0);
    }
}

const gerente = new Gerente('Gerente da Silva');
const funcionario1 = new Funcionario('Funcionário 1 da Silva', 'Técnico em Informática', 2000);
const departamento = new Departamento(gerente, [funcionario1]);
console.log(`Salário total do departamento: ${departamento.calculaTotalSalarios()}`);
const desenvolvedor = new Desenvolvedor('Desenvolvedor da Silva', 'Programador', 4000, 'PHP');
departamento.adicionarFuncionario(desenvolvedor);
console.log(`Salário total do departamento: ${departamento.calculaTotalSalarios()}`);
const analista = new Analista('Analista da Silva', 'Analista de infra', 3000);
departamento.adicionarFuncionario(analista);
console.log(`Salário total do departamento: ${departamento.calculaTotalSalarios()}`);
