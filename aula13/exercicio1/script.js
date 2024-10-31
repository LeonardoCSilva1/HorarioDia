  function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19//data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = '../../midias/imagens/dia.png'
        document.body.style.background = '#edd587'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../../midias/imagens/tarde.png'
        document.body.style.background = '#f6a55b'
    }else {
        img.src = '../../midias/imagens/noitee.png'
        document.body.style.background = '#17274b'
    }
  }

