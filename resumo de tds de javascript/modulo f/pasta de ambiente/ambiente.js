let num = [5, 8, 2, 9, 3]
/*console.log (`Nosso vetor é o ${num}`)*/
/*console.log (num)*/
/*console.log (num[0])*/
num.push(1)
 num.sort()
console.log(num)
console.log (`o vetor tem ${num.length} posinamento`)
console.log (`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`valor nao foi encontrado!`)
}else{
    console.log(`o valor 8 estar na posiçao ${pos}`)
}

