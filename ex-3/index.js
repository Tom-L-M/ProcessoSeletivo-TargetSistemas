/**
 * 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
 * faça um programa, na linguagem que desejar, que calcule e retorne:
 *  A. O menor valor de faturamento ocorrido em um dia do mês;
 *  B. O maior valor de faturamento ocorrido em um dia do mês;
 *  C. Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 */

const dados = require('./dados.json');

function menorValor (jsondata, { zero = true } = {}) {
    return (zero ? jsondata : jsondata.filter(v => v.valor !== 0)).sort((v1, v2) => v1.valor < v2.valor ? -1 : 1)[0].valor
};

function maiorValor (jsondata) {
    return jsondata.sort((v1, v2) => v1.valor >= v2.valor ? -1 : 1)[0].valor;
};

function diasExcedendo (jsondata) {
    const contagemTotal = jsondata.filter(v => v.valor !== 0).length;
    const valorTotal = jsondata.reduce((a, b) => a + b.valor, 0);
    const media = valorTotal / contagemTotal;
    return jsondata.filter(v => v.valor > media).length;
};

console.log('\n',
    'A) Menor valor de faturamento ocorrido em um dia do mês:', menorValor(dados), '\n',
    'A) Menor valor de faturamento ocorrido em um dia do mês: (não-zero)', menorValor(dados, { zero: false }), '\n',
    'B) Maior valor de faturamento ocorrido em um dia do mês:', maiorValor(dados), '\n',
    'C) Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:', diasExcedendo(dados)
);