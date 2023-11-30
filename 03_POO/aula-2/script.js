class Autor {
    #nome;
    #nacionalidade;
    constructor(nome, nacionalidade) {
        this.#nome = nome;
        this.#nacionalidade = nacionalidade;
    }
    exibirDetalhes() {
        console.log(`* O nome do autor é ${this.#nome} e sua nacionalidade é ${this.#nacionalidade}`);
    }
    //Getters e setters
    getNome() {
        return this.#nome;
    }
    setNome(nome) {
        this.#nome = nome;
    }
    getNacionalidade() {
        return this.#nacionalidade;
    }
    setNacionalidade(nacionalidade) {
        this.#nacionalidade = nacionalidade;
    }
}

class Livro {
    #titulo;
    #anoPublicacao;
    #autor;
    constructor(titulo, anoPublicacao, autor) {
        this.#titulo = titulo;
        this.#anoPublicacao = anoPublicacao;
        this.#autor = autor;
    }
    detalhesDoLivro() {
        console.log(`-> O título do livro é ${this.#titulo}, ele foi publicado em ${this.#anoPublicacao} e os dados de deu autor são os seguintes:`);
        this.#autor.exibirDetalhes();
    }
    //Getters e setters
    getTitulo() {
        return this.#titulo;
    }
    setTitulo(titulo) {
        this.#titulo = titulo;
    }
    getAnoPublicacao() {
        return this.#anoPublicacao;
    }
    setAnoPublicacao(anoPublicacao) {
        this.#anoPublicacao = anoPublicacao;
    }
    getAutor() {
        return this.#autor;
    }
    setAutor(autor) {
        this.#autor = autor;
    }
}

class Biblioteca {
    #livros = [];
    adicionarLivro(livro) {
        this.#livros.push(livro);
    }
    listarTodosOsLivros() {
        console.log('Os seguintes livros se encontram na biblioteca no momento:');
        this.#livros.forEach(livro => {
            livro.detalhesDoLivro();
        });
    }
    buscaLivrosPorAutor(nome) {
        return this.#livros.filter(livro => livro.getAutor().getNome() == nome);
    }
}

const mario = new Autor('Mário de Andrade', 'Brasileira');
const machado = new Autor('Machado de Assis', 'Brasileira');

const macunaima = new Livro('Macunaíma', 1928, mario);
const domCasmurro = new Livro('Dom Casmurro', 1899, machado);
const brasCubas = new Livro('Memórias Póstumas de Brás Cubas', 1881, machado);

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(macunaima);
biblioteca.adicionarLivro(domCasmurro);
biblioteca.adicionarLivro(brasCubas);

biblioteca.listarTodosOsLivros();

console.log(biblioteca.buscaLivrosPorAutor('Mário de Andrade'));
console.log(biblioteca.buscaLivrosPorAutor('Machado de Assis'));

