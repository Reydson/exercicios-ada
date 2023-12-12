//Opção 5: Sistema de Gestão de Finanças Pessoais com Programação Orientada a Objetos em JavaScript

class Transacao {
    constructor(descricao, valor, categoria, data) {
        this.descricao = descricao;
        this.valor = valor;
        this.categoria = new Categoria(categoria);
        this.data = data;
    }
}

class Categoria {
    constructor(nome) {
        this.nome = nome;
    }
}

class MetaFinanceira {
    constructor(descricao, valorMeta, progresso) {
        this.descricao = descricao;
        this.valorMeta = valorMeta;
        this.progresso = progresso;
    }
}

class GestorFinancas {
    transacoes = [];
    categorias = [];
    metas = [];

    adicionarTransacao(transacao) {
        this.transacoes.push(transacao);
    }
    adicionarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    adicionarMeta(meta){
        this.metas.push(meta);
    }
    calcularSaldo(){
        return this.transacoes.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
    }
    exibirTransacoes(periodo){
        console.log(`Listando as transações entre ${periodo.inicio.toLocaleDateString("pt-BR")} e ${periodo.fim.toLocaleDateString("pt-BR")}:`);
        this.transacoes.filter((transacao) => transacao.data.getTime() >= periodo.inicio && transacao.data.getTime() <= periodo.fim)
            .forEach(this.exibeTransacao);
    }
    exibirCategorias() {
        this.categorias.forEach((categoria) => this.exibirCategoria(categoria));
    }
    exibirCategoria(categoria) {
        console.log(`Listando as transações da categoria ${categoria.nome}:`);
        this.transacoes.filter((transacao) => transacao.categoria.nome === categoria.nome).forEach(this.exibeTransacao);
    }
    exibeTransacao(transacao) {
        console.log(`Descrição: ${transacao.descricao}\nValor: ${transacao.valor}\nCategoria: ${transacao.categoria.nome}\nData: ${transacao.data.toLocaleDateString("pt-BR")}`);
    }
    exibeMetas() {
        console.log('Listando as metas:');
        this.metas.forEach(this.exibeMeta);
    }
    exibeMeta(metaFinanceira) {
        console.log(`Descrição: ${metaFinanceira.descricao}\nValor: R$:${metaFinanceira.valorMeta.toFixed(2)}\nProgresso: R$:${metaFinanceira.progresso.toFixed(2)}`);
    }
    gerarRelatorioFinanceiro(){
        console.log('Gerando relatório financeiro:');
        this.exibirCategorias();
        this.exibeMetas();
        console.log(`Saldo total atual: R$:${this.calcularSaldo().toFixed(2)}`);
    }
    atualizarProgressoMeta(meta, valor){
        this.metas = this.metas.map((metaOriginal) => {
            if(metaOriginal.descricao == meta.descricao) {
                metaOriginal.progresso = valor;
            }
            return metaOriginal;
        })
    }
}

// Criar instâncias de Transacao, Categoria, MetaFinanceira e GestorFinancas
const transacao1 = new Transacao(
  "Salário",
  3000,
  "Salário",
  new Date("2023-02-01")
);
const transacao2 = new Transacao(
  "Aluguel",
  -800,
  "Moradia",
  new Date("2023-02-05")
);
const transacao3 = new Transacao(
  "Supermercado",
  -150,
  "Alimentação",
  new Date("2023-02-10")
);

const categoriaSalario = new Categoria("Salário");
const categoriaMoradia = new Categoria("Moradia");
const categoriaAlimentacao = new Categoria("Alimentação");

const metaEconomia = new MetaFinanceira("Economia para viagem", 500, 0);

const gestorFinancas = new GestorFinancas();
gestorFinancas.adicionarCategoria(categoriaSalario);
gestorFinancas.adicionarCategoria(categoriaMoradia);
gestorFinancas.adicionarCategoria(categoriaAlimentacao);

gestorFinancas.adicionarTransacao(transacao1);
gestorFinancas.adicionarTransacao(transacao2);
gestorFinancas.adicionarTransacao(transacao3);

gestorFinancas.adicionarMeta(metaEconomia);

// Exibir saldo total
console.log(`Saldo Total: R$:${gestorFinancas.calcularSaldo().toFixed(2)}`);

// Exibir transações do mês de fevereiro
gestorFinancas.exibirTransacoes({
  inicio: new Date("2023-02-01"),
  fim: new Date("2023-02-28"),
});

// Exibir categorias disponíveis
gestorFinancas.exibirCategorias();

// Atualizar progresso da meta
gestorFinancas.atualizarProgressoMeta(metaEconomia, 200);

// Gerar relatório financeiro
gestorFinancas.gerarRelatorioFinanceiro();