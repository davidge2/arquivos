let rmt =  document.querySelector('input#rmt')
let selc =  document.querySelector('select#somando')
let res = document.querySelector('div#res')
let valores =[]
function rtNumero(p){
    if (Number(p) >= 1 && Number(p)<= 100){
        return true
    } else {
        return false
    }
}
function rtLista(p, j){
    if (j.indexOf(Number(p)) != -1){
        return true
    }else{
        return false
    }
}
function somando(){
    if (rtNumero(rmt.value) && !rtLista(rmt.value, valores)){
        valores.push(Number(rmt.value))
        let item = document.createElement('option')
        item.text = `valor ${rmt.value} adicionado.`
        selc.appendChild(item)
        res.innerHTML = ``
    }else{
        alert(`seu numero valido ou não existe na lista!`)
    }
    rmt.value = ``
    rmt.focos()
}
function valor(){
    if (valores.length == 0 ){
        alert(`adcionar seu valor antes do de dar o valor certo`)
    }else{
        let vlr = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores [pos]
            if (valores [pos] > maior)
                maior = valores [pos]
            if (valores [pos] < menor)
                menor = valores [pos]
        }
        media = soma / vlr
        res.innerHTML = ``
        res.innerHTML += `<p>temos valores, de ${vlr} inscritos.</p>`
        res.innerHTML +=`<p>o valor informado alto e de ${maior}</p>`
        res.innerHTML += `<p>o valor informado baixo e de ${menor}</p>`
        res.innerHTML += `<p>o valor ao todo e ${soma}</p>`
        res.innerHTML +=  `<p>valor de media e ${ media}</p>`
    }
}