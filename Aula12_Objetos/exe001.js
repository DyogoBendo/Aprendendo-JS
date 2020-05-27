let amigo = {nome:`Jose`,
 sexo: `M`,
  peso: 85.7, 
  engordar(p=0){
      console.log(`Engordou`)
      this.peso += p // this referencia o proprio objeto, nesse caso, amigo
  }}
console.log(typeof(amigo))
// Array tambem eh um objeto

console.log(amigo)
console.log(amigo.nome) // Mostrando um atributo
console.log(`${amigo.nome} pesava ${amigo.peso}`)
amigo.engordar(5)
console.log(`Agora, ${amigo.nome} pesa ${amigo.peso}`)