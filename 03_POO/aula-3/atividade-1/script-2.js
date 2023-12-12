console.log('Exercício 2');
class ConversorDeMoeda {
    constructor(taxaDeCambio) {
        this.taxaDeCambio = taxaDeCambio;
    }
    
    converter(valor, moedaEntrada, moedaSaida) {
        if(moedaEntrada === 'USD' && moedaSaida === 'BRL' ) {
            return valor * this.taxaDeCambio;
        }
        if(moedaEntrada === 'BRL' && moedaSaida === 'USD' ) {
            return valor / this.taxaDeCambio;
        }
        throw new Error('Conversão inválida');
    }
}

// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
console.log(`Valor convertido: ${valorConvertido} BRL`);
// Saída esperada: Valor convertido: 500.0 BRL

const valorConvertido2 = conversorMoeda.converter(100, 'BRL', 'USD');
console.log(`Valor convertido: ${valorConvertido2} USD`);

try {
    const valorConvertido3 = conversorMoeda.converter(100, 'BRL', 'EUR');
    console.log(`Valor convertido: ${valorConvertido3} EUR`);
} catch(erro) {
    console.log(erro.message);
}