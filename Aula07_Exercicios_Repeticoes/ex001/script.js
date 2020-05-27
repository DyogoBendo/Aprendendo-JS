function contar(){
    let ini = document.getElementById(`iNum1`).value
    let fim = document.getElementById(`iNum2`).value
    let passo = document.getElementById('iPasso').value
    let res = document.getElementById(`res`)

    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        alert(`Erro! Faltam dados`)
        res.innerHTML = `Impossivel contar!`
    }
    else{
        res.innerHTML = 'Contando:  <br>'
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)
        if(p == 0){
            alert(`Passo invalido! Sera considerado passo = 1`)
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else{
            for(var c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}