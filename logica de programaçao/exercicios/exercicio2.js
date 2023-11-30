/* 
exercicio - pagina 41 do livro logica de programaçao e algoritimos com javascript de edecio Iepsen
elabora um programa que leia o valor de um jantar . Calcule e valor da taxa do garçon (10%) e o valor total a ser pago.
EXEMPLO:
    valor do jantar:R$80,00
    taxa do garçon: R$8,00
    total a pagar: R$88,00
*/
let garçon = 10;
let jantar = 80;
let total = 0;

total = 80 + ((garçon /100) * 80);

//console.log('valor do jantar: R$' + jantar + ',00');
console.log(`valor do jantar:R$${jantar},00`)
//console.log(`garçon:R$${garçon},00`)
console.log(`garçon:R$${(garçon /100) * 80},00`)
console.log(`total:R$${total},00`)