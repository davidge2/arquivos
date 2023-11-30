/*Dados cinco números inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco números inteiros. Em seguida, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros longos separados por espaço.

Exemplo
arr = [1,3,5,7,9]
A soma mínima é 1+2+5+7 =16 e a soma máxima é 3+5+7+9=24. A função imprime*/
function miniMaxSum(arr) {
    // Write your code here
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];

        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

   return (sum - max,sum - min);
}
console.log([1,2,3,4,5])
