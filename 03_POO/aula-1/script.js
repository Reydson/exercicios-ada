//Funcional 1
function somaQuadradosPares(numeros) {
    return numeros
        .filter(numero => !(numero % 2))
        .map(numero => numero ** 2)
        .reduce((acumulador, numero) => numero + acumulador);
}
console.log(somaQuadradosPares([10,11,2,5]))

//Funcional 2
function ordenaPalavras(palavras) {
    return palavras.sort((palavra1, palavra2) => palavra1.length - palavra2.length)
}
console.log(ordenaPalavras(["banana", "laranja", "abacaxi", "uva"]))

//Funcional 3
function mediaNumerosImpares(numeros) {
    const impares = numeros.filter(numero => (numero % 2));
    return impares.reduce((acumulador, numero) => numero + acumulador)/impares.length;
}
console.log(mediaNumerosImpares([10,11,2,5]))