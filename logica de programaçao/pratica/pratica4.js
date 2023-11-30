function peixes(px){
    let sem = 0;
    for(let rt =0; rt < px.length;rt +=1){
        sem = sem + px[rt];
    }
    return sem;
}

console.log(peixes([1,2,3,10]));