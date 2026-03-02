var titulo = window.document.getElementById('titulo')
var rodape = window.document.getElementById('rodape')
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

function formatar_tempo(hora, minutos, segundos) {
  return `
    <span class="hora">${String(hora).padStart(2, '0')}:</span><span class="minuto">${String(minutos).padStart(2, '0')}:</span><span class="segundo">${String(segundos).padStart(2, '0')}</span>`;
}

function texto_claro(){
    titulo.style.color = 'white'
    rodape.style.color = 'white'
}
function texto_escuro(){
    titulo.style.color = 'black'
    rodape.style.color = 'black'
}
function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML= formatar_tempo(hora, minutos, segundos)


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

let intervalo = setInterval(() => {
    carregar()
},1000)