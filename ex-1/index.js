/**
 * 1) Observe o trecho de código abaixo: 
 * 
 *  int INDICE = 13, SOMA = 0, K = 0;
 *  Enquanto K < INDICE faça { 
 *      K = K + 1; 
 *      SOMA = SOMA + K; 
 *  }
 *  Imprimir(SOMA);
 * 
 * Ao final do processamento, qual será o valor da variável SOMA?
 * 
 */


// Resposta:    91

// Código em JavaScript (NodeJS runtime):

const INDICE = 13;
let SOMA = 0, K = 0;

while (K < INDICE) {
    K += 1;
    SOMA += K;
}

console.log(SOMA);