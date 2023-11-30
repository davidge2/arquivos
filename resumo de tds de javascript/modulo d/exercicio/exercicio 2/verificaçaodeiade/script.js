function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        // bom dia
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#cd9551'
    } else if (hora >=12 && hora <18) {
        // boa tarde
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#4ad1d3'
    } else {
        //boa noite
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#911b7fb8'
    }
}


