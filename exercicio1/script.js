  function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19//data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'midia/imagens/dia.png'
        document.body.style.background = '#edd587'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'midia/imagens/tarde.png'
        document.body.style.background = '#f6a55b'
    }else {
        img.src = 'midia/imagens/noitee.png'
        document.body.style.background = '#17274b'
    }
  }

