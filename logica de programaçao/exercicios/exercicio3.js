/*
    exercicio - pagina 45 do livro logica de programaçao e algoritimos com javascript de edecio Iepsen
    elabora um programa para uma loja, no qual leia o preço de um produto e informe as opçoes de pagamento da loja
    calcule e informe o valor para o pagamento á vista com 10% de desconto e o valor em 3x
    EXEMPLO:
    preço: R$60,00
    Á vista: R$54,00
    ou 3x de: R$20,00
*/
let preço = 60;
let aVista = 10;
let totalAvista = 0

totalAvista= (preço - (aVista / 100) * preço);
//console.log(totalAvista);
console.log(`preço:R$${preço},00`)
console.log(`a vista:R$${totalAvista},00`)
console.log(`ou 3x de:R$${preço/3},00`)



