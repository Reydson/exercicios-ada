console.log('Exercício 1');

class Hotel {
    quartos = [];
    reservas = [];
    hospedes = [];
    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }
    adicionarHospede(hospede) {
        this.hospedes.push(hospede);
    }
    consultarDisponibilidade(quarto, dataInicial, dataFinal) {
        if(!quarto.disponivel) {
            return false;
        }
        return !this.reservas.some((reserva) => {
            if(reserva.quarto === quarto) {
                if(dataInicial.getTime() >= reserva.dataInicial.getTime() && dataInicial.getTime() <= reserva.dataFinal.getTime()) { //começo da data pretendida está compreendido no período de uma reserva
                    return true;
                }
                if(dataFinal.getTime() >= reserva.dataInicial.getTime() && dataFinal.getTime() <= reserva.dataFinal.getTime()) { //final da data pretendida está compreendido no período de uma reserva
                    return true;
                }
            }
            return false;
        });
    }
    reservarQuarto(quarto, hospede, dataInicial, dataFinal) {
        if(!this.consultarDisponibilidade(quarto, dataInicial, dataFinal)) {
            throw new Error('Quarto indisponível ou já reservado nesse período');
        }
        this.reservas.push(new Reserva(hospede, quarto, dataInicial, dataFinal));
    }
    exibirInformacoesQuartos() {
        console.log('Informação sobre os quartos:');
        this.quartos.forEach((quarto) => {
            console.log(`Número do quarto: ${quarto.numero}\nTipo: ${quarto.tipo}\nDisponível: ${quarto.disponivel ? 'Sim' : 'Não'}`);
        })
    }
    exibirInformacoesHospedes() {
        console.log('Informação sobre os hóspedes:');
        this.hospedes.forEach((hospede) => {
            console.log(`Nome do hospede: ${hospede.nome}\nAno de nascimento: ${hospede.anoNascimento}`);
        })
    }
    exibirInformacoesReservas() {
        console.log('Informação sobre as reservas:');
        this.reservas.forEach((reserva) => {
            console.log(`Número do quarto reservado: ${reserva.quarto.numero}\nNome do hóspede: ${reserva.hospede.nome}\nInicio da reserva: ${reserva.dataInicial.toLocaleDateString("pt-BR")}\nFinal da reserva: ${reserva.dataFinal.toLocaleDateString("pt-BR")}`);
        })
    }
    exibirInformacoesHotel() {
        this.exibirInformacoesQuartos();
        this.exibirInformacoesHospedes();
        this.exibirInformacoesReservas();
    }
}

class Quarto {
    static numerosUtilizados = [];
    constructor(numero, tipo, disponivel) {
        if(this.constructor.numerosUtilizados.includes(numero)) {
            throw new Error('Número de quarto já utilizado por outro');
        }
        if(!['Simples', 'Duplo', 'Suíte'].includes(tipo)) {
            throw new Error('Tipo de quarto inválido, o tipo deve ser Simples, Duplo ou Suíte');
        }
        this.constructor.numerosUtilizados.push(numero);
        this.numero = numero;
        this.tipo = tipo;
        this.disponivel = disponivel;
    }
}

class Hospede {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }
}

class Reserva {
    constructor(hospede, quarto, dataInicial, dataFinal) {
        this.hospede = hospede;
        this.quarto = quarto;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
    }
}

const quarto10 = new Quarto(10, 'Suíte', true);
const quarto11 = new Quarto(11, 'Simples', true);
const quarto12 = new Quarto(12, 'Simples', false);

const joao = new Hospede('João', 1993);
const julio = new Hospede('João', 2000);

const hotel = new Hotel();
hotel.adicionarQuarto(quarto10);
hotel.adicionarQuarto(quarto11);
hotel.adicionarQuarto(quarto12);
hotel.adicionarHospede(joao);
hotel.adicionarHospede(julio);

console.log(hotel.consultarDisponibilidade(quarto10, new Date("2023-02-01"), new Date("2023-02-28")));
hotel.reservarQuarto(quarto10, joao, new Date("2023-02-27"), new Date("2023-03-01"));
console.log(hotel.consultarDisponibilidade(quarto10, new Date("2023-02-01"), new Date("2023-02-28")));
hotel.reservarQuarto(quarto11, julio, new Date("2023-12-01"), new Date("2023-12-31"));

hotel.exibirInformacoesQuartos();
hotel.exibirInformacoesHospedes();
hotel.exibirInformacoesReservas();
hotel.exibirInformacoesHotel();