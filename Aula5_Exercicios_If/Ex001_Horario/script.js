function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`

    if(hora >= 6 && hora <= 12){
        window.document.body.style.background = '#e2cd9f'
        img.src = 'manha.png' // Troca a imagem
    }
    else if(hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }
    else if(hora > 18){
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}