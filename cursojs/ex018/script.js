
    let num = window.document.querySelector('input#fnum')
    let lista = window.document.querySelector('select#lista')
    let res = window.document.querySelector('div#res')
    let valores= []
    function isNumero(n){
        if(Number(n)>= 1 && Number(n)<=100){
            return true
        }else{
            return false
        }
        
    }
    
    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){// -1 significa que n tem esse elemento no array
            window.alert(`O valor já foi adicionado ou inexistente`)
            
            return true
        }else{
            return false
        }
    }
    function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)){// O ! antes de Lista e para dizer se o elemento estiver dentro do array = false, se n estiver = true
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.` //.TEXT PARA ESCREVAR NA TELA
            lista.appendChild(item)
            res.innerHTML = ''
        }
        num.value ='' //limpar o valor digitado na barra
        num.focus() //pra deixar o campo selecionado
    }
