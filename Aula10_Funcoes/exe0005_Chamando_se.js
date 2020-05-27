function fatorial(n){ 
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1) // Recursividade
    }
}
console.log(fatorial(4))