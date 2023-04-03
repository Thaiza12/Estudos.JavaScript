function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora =  20//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#b64407'
    } else if ( hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#e1b125'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#292d2e'
    }
}