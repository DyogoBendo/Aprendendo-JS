function tabuada(){
    var num = document.getElementById(`iNum`).value
    var tab = document.getElementById(`seltab`)

    if(num.length == 0 ){
        alert(`Por favor digite um numero!`)
    }
    else{
        num = Number(num)
        tab.innerHTML = ' '
        for(let i = 0; i <= 10; i ++){
            let item = document.createElement('option') // Cria um item de tag <option>
            item.text = `${num} x ${i} = ${num*i} ` // Texto de cada item
            item.value = `tab${i}`
            tab.appendChild(item) // Cria esse item dentro da variavel tab, que eh o <select>
        }
    }

}