console.log('Exercício 3');
class ContadorDePalavras {
    constructor(texto) {
        this.texto = texto;
    }

    contarPalavras() {
        return this.texto.split(' ').length;
    }
}
// Criando instância do contador de palavras
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');

// Obtendo contagem de palavras
const contagem = contadorPalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);
// Saída esperada: Número de palavras: 5