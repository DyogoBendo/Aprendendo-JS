let lista = document.getElementById(`flista`)
let num = window.document.querySelector(`input#iNum`)
let res = document.getElementById(`res`)
let vetor = []

function isNumber(n){
    if(Number(n) > 0 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }
    else{
        return false
    }
}

function analisar(){
    if(isNumber(num.value) && inList(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``

    }
    else{
        alert(`Valor invalido`)
    }
    num.value = ``
    num.focus() // Foca, como se fosse clicado pelo mouse
}

function somatorio(v){
    var resultado = 0
    for(let ele in v){
        resultado += v[ele]
    }
    return resultado
}

function ordernar(v){
    let resultado = []
    let comeco = v[0]
    let fim = v[0]
    for (ele in v){
        if(comeco > v[ele]){
            comeco = v[ele]
        }
    }
    resultado[0] = comeco

    for (ele in v){
        if(fim < v[ele]){
            fim = v[ele]
        }
    }
    resultado[1] = fim
    return resultado
}

function finalizar(){
    if(vetor.length == 0){
        alert(`Digite algum valor!`)
    }
    else{
        let total = vetor.length 
        let soma = somatorio(vetor)
        let grandeza = ordernar(vetor)
        res.innerHTML = `<p>Total de elementos inseridos: <strong> ${total} </strong></p>`
        res.innerHTML += `<p> A soma entre seus elementos: <strong> ${soma} </strong></p>`
        res.innerHTML += `<p> O maior elemento: <strong> ${grandeza[1]} </strong> </p>`
        res.innerHTML += `<p> O menor elemento: <strong> ${grandeza[0]} </strong> </p>`
        res.innerHTML += `<p> A media entre os valores dos elementos: <strong> ${soma/total} </strong></p>`
    }
}