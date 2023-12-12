console.log('Exercício 1');
class Conta {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    deposito(valor) {
        this.#saldo += valor;
    }
    saque(valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            throw new Error('Saldo insuficiente');
        }
    }
    consultaSaldo() {
        return this.#saldo;
    }
}

class ContaCorrente extends Conta{}
class ContaPoupanca extends Conta{}

class Cliente {
    constructor(nome, idade, contas) {
        this.nome = nome;
        this.idade = idade;
        this.contas = contas;
    }
}

const cliente = new Cliente('Reydson', 30, [new ContaCorrente(100), new ContaPoupanca(1000)]);
console.log(`Saldo da conta corrente: ${cliente.contas[0].consultaSaldo()}`);
console.log(`Saldo da conta poupança: ${cliente.contas[1].consultaSaldo()}`);
cliente.contas[0].deposito(100);
console.log(`Saldo da conta corrente: ${cliente.contas[0].consultaSaldo()}`);
cliente.contas[0].saque(150);
console.log(`Saldo da conta corrente: ${cliente.contas[0].consultaSaldo()}`);
try {
    cliente.contas[0].saque(150);
} catch(erro) {
    console.log(erro.message);
}
console.log(`Saldo da conta corrente: ${cliente.contas[0].consultaSaldo()}`);