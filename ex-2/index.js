/**
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
 * próximo valor sempre será a soma dos 2 valores anteriores 
 * (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
 * programa na linguagem que desejar onde, informado um número, 
 * ele calcule a sequência de Fibonacci e retorne uma mensagem 
 * avisando se o número informado pertence ou não a sequência.
 */

// Cli:
// node ex-2 [numero-inicial]

const numeroInicial = process.argv?.[2] ? parseInt(process.argv[2]) : 0;


function belongsToSequence (num) {
    if (num === 0) return true;
    let a = 0, b = 1, next = 1;
    while (next <= num) {
        if (next === num) return true;
        [ a, b ] = [ b, next ];
        next = a + b;
    }
    return false;
}


console.log(
    belongsToSequence(numeroInicial)
);