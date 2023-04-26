
    let num = window.document.getElementById('txtn')
    let lista = window.document.getElementById('lista')
    let res = window.document.getElementById('res')
    let valores= []
    function adicionar() {
        if (isNumero(num.value)&& !inLista(num.value)){
        } else{
            window.alert(' Valor inválido ou já está na lista ')
        }
    }
