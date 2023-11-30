function simpleArraySum(ar){
   let soma = 0;
   for(let index = 0; index < ar.length; index += 1){
    soma = soma + ar[index];
   }
   return soma;
};

console.log(simpleArraySum([1, 2, 3, 10]));


/*let xablau = [1, 2, 3, 4, 5, 10];
          [0, 1, 2, 3, 4, 5]*/