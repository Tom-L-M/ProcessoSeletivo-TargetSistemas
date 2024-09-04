/**
 * 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
 *  - SP – R$67.836,43
 *  - RJ – R$36.678,66
 *  - MG – R$29.229,88 
 *  - ES – R$27.165,48 
 *  - Outros – R$19.849,53
 * Escreva um programa na linguagem que desejar onde calcule o percentual de 
 * representação que cada estado teve dentro do valor total mensal da distribuidora.  
 */

const dados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'NN': 19849.53
}

const total = Object.values(dados).reduce((a, b) => a+b);
const percentualTruncado = estado => '~' + Math.trunc((dados[estado] / total) * 100) + '%';

console.log('\n',
    'Percentuais de representação por estado:',
    '\n  - SP:', percentualTruncado('SP'),
    '\n  - RJ:', percentualTruncado('RJ'),
    '\n  - MG:', percentualTruncado('MG'),
    '\n  - ES:', percentualTruncado('ES'),
    '\n  - Outros:', percentualTruncado('NN')
)