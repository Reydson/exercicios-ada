//POO 1
class Pessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    calcularIdadeBissextos(ano) {
        function checaSeAnoEhBissexto(ano) {
            return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
        }
        const nascimento = new Date().getFullYear() - this.idade;
        let anosBissextosPassados = 0;
        for(let a = nascimento; a < ano; a++) {
            if(checaSeAnoEhBissexto(a)) {
                anosBissextosPassados++;
            }
        }
        return anosBissextosPassados;
    } 
}

const pessoa = new Pessoa('Reydson', 30, 'Nova Friburgo');

console.log(pessoa.calcularIdadeBissextos(2023));

//POO 2
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
}

class Mamifero extends Animal {
    amamentar() {
        console.log(`${this.nome} amamentou`);
    }
}

class Ave extends Animal {
    voar() {
        console.log(`${this.nome} voou`);
    }
}

const mamifero = new Mamifero('Cookie', 'cachorro');
const ave = new Ave('Bobby', 'pássaro');

mamifero.amamentar();
ave.voar();

//Poo 3
class Carro {
    constructor(modelo, ano, ligado) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
    }
    ligar() {
        this.ligado = true
        console.log(`-> O carro ${this.modelo} foi ligado`);
    }
    desligar() {
        this.ligado = false;
        console.log(`-> O carro ${this.modelo} foi desligado`);
    }
    acelerar() {
        if(this.ligado) {
            console.log(`O carro ${this.modelo} acelerou`);
        } else {
            console.log(`O carro ${this.modelo} está desligado e não acelerou`);
        }
    }
    frear() {
        console.log(`O carro ${this.modelo} freiou`);
    }
    status() {
        if(this.ligado) {
            console.log(`O carro ${this.modelo} está ligado`);
        } else {
            console.log(`O carro ${this.modelo} está desligado`);
        }
    }
}

const carro = new Carro('Gol', '2023', false);
const carro2 = new Carro('Voyage', '2023', true);
carro.frear();
carro.acelerar();
carro.status();
carro2.status();
carro.ligar();
carro.acelerar();
carro.status();
carro.desligar();
carro.acelerar();
carro.status();