let num = [5, 4, 3]
num.push(1) // adicionar o número 1
num.sort() // colocar em ordem os números
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // leitura de quantas posições tem 
console.log(`O primeiro valor  do vetor é o ${num[0]}`) // leitura do primeiro número 
let pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
console.log (` O valor 3 está na posição ${pos}`)
}