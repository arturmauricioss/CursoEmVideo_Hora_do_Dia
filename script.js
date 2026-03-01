function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var rodape = window.document.getElementById('rodape')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML=`${hora}:${minutos}`


function texto_claro(){
    titulo.style.color = 'white'
    rodape.style.color = 'white'
}
function texto_escuro(){
    titulo.style.color = 'black'
    rodape.style.color = 'black'
}

    if (hora<5){
        img.src = './assets/madrugada.png'
        document.body.style.background = '#1A1A1A' 
        texto_claro()
    }
    else if(hora<7){
        img.src = './assets/amanhecer.png'
        document.body.style.background = '#f9b394'
        texto_escuro()
        
    }
    else if(hora<12){
        img.src = './assets/dia.png'
        document.body.style.background = '#4EA2EA'
        texto_claro()
    }
    else if(hora<17){
        img.src = './assets/tarde.png'
        document.body.style.background = '#961b40'
        texto_claro()
    }
    else if(hora<19){
        img.src = './assets/entardecer.png'
        document.body.style.background = '#FCE494' 
        texto_escuro()
        
    }
    else{
        img.src = './assets/noite.png'
        document.body.style.background = '#12121e'
        texto_claro()
    }
}
