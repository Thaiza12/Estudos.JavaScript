function verificar (){
   var data = new Date ()
   var ano = data.getFullYear ()
   var fano = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')
   }else{
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement ('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        gênero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute ('src', 'criancamenino.png' )
        }else if (idade < 21){
            //jovem
            img.setAttribute ('src', 'jovemmenino.png' )
        }else if (idade < 50){
            //adulto
            img.setAttribute ('src', 'adultomenino.png' )
        } else{
            //idoso
            img.setAttribute ('src', 'idosomenino.png' )
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute ('src', 'criancamenina.png' )
        }else if (idade < 21){
            //jovem
            img.setAttribute ('src', 'jovemmenina.png' )
        }else if (idade < 50){
            //adulto
            img.setAttribute ('src', 'adultamenina.png' )
        } else{
            //idoso
            img.setAttribute ('src', 'idosamenina.png' )
        }
    }
    res.style.textAlign ='center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
   }
}