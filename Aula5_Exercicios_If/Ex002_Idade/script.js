function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iAno').value
    var res = document.getElementById('res')
    if(fano.length == 0 || fano > ano){
        alert(`Verifique os dados e tente novamente`)
    }
    else{
        var fsex = document.getElementsByName(`nSexo`)
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img') // Cria um elemento com a tag <img>
        img.setAttribute('id', 'foto') // Define o atributo id como foto: id="foto"
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if(idade > 10 & idade <= 25){
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if(idade > 25 && idade < 60){
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if(idade > 10 & idade <= 25){
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if(idade > 25 && idade < 60){
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        else{
            alert(`Verifique os dados e tente novamente`)
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // Adiciona um elemento dentro do conteudo, nesse caso, uma tag do tipo <div>
    }
}