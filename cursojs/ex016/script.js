function contar (){
    let ini= window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
 if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
   // window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível contar!'
} else{
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if( p <= 0 ){
        window.alert('Passo inválido. Considerando PASSO 1')
        p = 1
    }
    if(i < f){
        // contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}` 
            }
        }else{
            // contagem regressiva 
            for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

// var c de contador ( o contador vai começar no inicio; enquanto o contador for <= ao fim; o contador receber ele mesme mais o passo(p) )
// o emoji só funciona entre crases, o site é https://unicode.org/