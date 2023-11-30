function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO!] verifique seus dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotodebebe.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'fotodejh.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'fotodedh.png')
            } else{
                //idoso
                img.setAttribute('src', 'fotodeh.png')
            }
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotodebebe2.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'fotodejma.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'fotodedmn.png')
            } else{
                //idoso
                img.setAttribute('src', 'fotodem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}


