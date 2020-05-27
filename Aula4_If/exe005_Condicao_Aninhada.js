var idade = 40
if(idade < 16){
    console.log(" Nao Vota")
}
else if (idade >= 16 && idade < 18 || idade > 65){
    console.log(`Voto opcional`)
}
else{
    console.log(`Voto obrigatorio`)
}