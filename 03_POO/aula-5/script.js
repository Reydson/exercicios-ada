//1. Sistema de Gerenciamento de Biblioteca
class Livro {
    constructor(nome, autor) {
        this.nome = nome;
        this.autor = autor;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    removerLivro(nomeLivro) {
        this.livros = this.livros.filter((livro) => livro.nome != nomeLivro);
    }
    listarLivros() {
        console.log(this.livros.map(({nome, autor}) => `${nome} (${autor})`).join('\n'));
    }
}

const macunaima = new Livro('Macunaíma', 'Mário de Andrade');
const domCasmurro = new Livro('Dom Casmurro', 'Machado de Assis');
const brasCubas = new Livro('Memórias Póstumas de Brás Cubas', 'Machado de Assis');

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(macunaima);
biblioteca.adicionarLivro(domCasmurro);
biblioteca.adicionarLivro(brasCubas);

biblioteca.listarLivros();
biblioteca.removerLivro('Macunaíma');
biblioteca.listarLivros();