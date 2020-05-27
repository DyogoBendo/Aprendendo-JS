let num = [1, 2]
num.push(40, 7)
num.sort() // Serve apenas para string, para numeros usamos: 
num.sort(function(a,b){return a - b}) // Ordena os numeros em ordem crescente
console.log(`Nosso vetor: ${num}`)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(num[0])

for(let i = 0; i < num.length; i++ ){
    console.log(`Valor: ${num[i]}`)
}

for(let i in num){
    console.log(`Usando o for each falso: ${num[i]}`)
}

console.log(`O valor 7 esta na posicao: ${num.indexOf(7)}`) // Procura o valor 7 dentro do vetor e retorna o seu indice, se nao achar retorna -1