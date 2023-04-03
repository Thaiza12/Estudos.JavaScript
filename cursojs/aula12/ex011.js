/*var idade = 25
if (idade < 18){
console.log ('Menor de idade')
}else{
    console.log('Maior de idade')
}*/

var idade = 67
console.log(`Você tem ${idade}anos`)
if(idade < 16) {
    console.log ('Não vota')
} else if (idade < 18 || idade > 65 ) {
        console.log ('Voto Opcional')
} else {
    console.log('Voto obrigatório')
}