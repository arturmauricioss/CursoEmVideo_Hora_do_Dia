function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var rodape = window.document.getElementById('rodape')

    var data = new Date()
    var hora = data.getHours()
    hora = 20
    msg.innerHTML=`Agora são ${hora} horas.`

    if (hora<5){
        img.src = './assets/madrugada.png'
        document.body.style.background = '#1A1A1A' 
    }
    else if(hora<7){
        img.src = './assets/amanhecer.png'
        document.body.style.background = '#1A1A1A' 
    }
    else if(hora<12){
        img.src = './assets/dia.png'
        document.body.style.background = '#1A1A1A' 
    }
    else if(hora<17){
        img.src = './assets/tarde.png'
        document.body.style.background = '#1A1A1A' 
    }
    else if(hora<19){
        img.src = './assets/entardecer.png'
        document.body.style.background = '#FCE494' 
        titulo.style.color = 'black'
        rodape.style.color = 'black'
        
    }
    else{
        img.src = './assets/noite.png'
        document.body.style.background = '#12121e'
        titulo.style.color = 'white'
        rodape.style.color = 'white'
    }
}