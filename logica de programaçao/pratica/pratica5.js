function seleçao(a,b){
    let brasil = 0;
    let chile = 0;
    for(let estadio =0; estadio <a.length; estadio+=1){
        if(a[estadio]>b[estadio]){
            brasil+=1;
        }else if(a[estadio]<b[estadio]){
            chile +=1;
        }
    }
    return [brasil, chile];
}
console.log(seleçao([5,6,8],[2,3,4]))