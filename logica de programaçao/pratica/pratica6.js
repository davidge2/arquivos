function eHardMediunSom(sm){
    let somatoria = 0;
    for(let dex=0; dex<sm.length;dex +=1){
        somatoria = somatoria + sm[dex];
    }
    return somatoria;
}
console.log(eHardMediunSom([10,40,30]))