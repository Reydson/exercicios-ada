//Funcional 1
function somaQuadradosPares(numeros) {
    let somatorio = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            somatorio += numeros[i] ** 2;
        }
    }
    return somatorio;
}
console.log(somaQuadradosPares([10,11,2,5]))

//Funcional 2 (bubble sort)
function ordenaPalavras(palavras) {
    for(let rodada = 1; rodada < palavras.length; rodada++) {
        for(let atual = 0; atual < palavras.length - rodada; atual++) {
            if(palavras[atual].length > palavras[atual+1].length) {
                const tmp = palavras[atual];
                palavras[atual] = palavras[atual+1];
                palavras[atual+1] = tmp;
            }
        }
    }
    return palavras;
}
console.log(ordenaPalavras(["banana", "laranja", "abacaxi", "uva"]))

//Funcional 3
function mediaNumerosImpares(numeros) {
    let somatorio = 0;
    let quantidade = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 != 0) {
            somatorio += numeros[i];
            quantidade++;
        }
    }
    return somatorio/quantidade;
}
console.log(mediaNumerosImpares([10,11,2,5]))