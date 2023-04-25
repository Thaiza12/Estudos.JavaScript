function tabuada (){
    let num = window.document.getElementById('txtn')
    let tabuada = window.document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Digite um número!')
    }else{
    let n = Number(num.value)
    let c = 1
    tabuada.innerHTML=''
    while ( c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x  ${c} = ${n*c}`
        tabuada.appendChild(item)
        c++
        }
    }
}